import express from "express";
import { Code } from "../../models/";
import { generateRandomCode } from "../utils/generateRandomCode";

class AuthController {
  getMe(req: express.Request, res: express.Response) {
    res.json(req.user);
  }

  authCallback(req: express.Request, res: express.Response) {
    // Successful authentication, redirect home.
    // res.redirect("/");
    // res.send();
    // res.json(req.user);
    res.send(
      `<script>window.opener.postMessage('${JSON.stringify(
        req.user
      )}','*');window.close()</script>`
    ); // автоматичне закриття вікна
  }

  async activate(req: express.Request, res: express.Response) {
    const userId = req.user.id;
    const smsCode = req.query.code;

    if (!smsCode) {
      return res.status(400).send();
    }

    const whereQuery = { code: smsCode, user_id: userId };

    try {
      const findCode = await Code.findOne({
        where: whereQuery,
      });

      if (findCode) {
        await Code.destroy({
          where: whereQuery,
        });
        // TODO: Після успішної активації, видалити код і isActive = 1
        return res.send();
      } else {
        throw new Error("User not found ");
      }
    } catch (error) {
      res.status(500).json({
        message: "Erroe when activate account",
      });
    }
  }

  async sendSMS(req: express.Request, res: express.Response) {
    const phone = req.query.phone;
    const userId = req.user.id;
    const smsCode = generateRandomCode();
    
    if (!phone) {
      // TODO Експрес валідатор

      return res.status(400).json({
        message: "Telephone number not write",
      });
    }
    try {
      // await Axios.get(
      //   `https://sms.ru/send?send_id=${process.env.SMS_API_KEY}&to=${process.env.SMS_API_PHONE}&msg=${smsCode}`
      // );

      const findCode = await Code.findOne({
        where: { user_id: userId },
      });

      if (findCode) {
        return res.status(400).json({
          message: "Code repeat",
        });
      }

      await Code.create({
        code: smsCode,
        user_id: userId,
      });
      res.status(201).send();
    } catch (error) {
      res.status(500).json({
        message: "Erroe when sending SMS",
      });
    }

    // const data = await Axios.post(
    //   "https://api-gateway.kyivstar.ua/mock/rest/v1beta",
    //   (req, res) => {
    //     const code = {
    //       from: "messagedesk",
    //       to: "38 (067) 273-67-51",
    //       text: "Hello World!",
    //     };
    //     return req.code.body;
    //   }
    // );
  }
}

export default new AuthController();
