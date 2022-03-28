# TODO

- [x] (Переверстати все на компоненти)
- [ ] (Welcome Step додати силуект навушників)

## Next.js

- Рендер на стороні сервера;
- Без SSR(Server Side Rendering) погано індексується пошуковими системами;
- Створення Next.js app
  `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
- Кращий для інтернет магазинів та для чогось складніше
- Створення простіший варіант
  `npx create-next-app name-project`
- npm run start for production
- Папка pages потрібно вказувати index.js у папці компоненту
- npm install node-sass
- npm install --save clsx
- гетспи для статичної генерації
- import Component, {One, Two} from - деструктизація
- Класові компоненти
- npm install --save-dev @types/react @types/node typescript
- Sequlize для бд
- For TS create touch tsconfig.json
- vb audio virtual cable
- Якщо є async func то краще обертати в try catch
- "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
- Хук працює тільки в компоненті.(Not working getServerSideProps)
  BackEnd
- npm i express @types/express cors @types/cors ts-node-dev
- npm install passport @types/passport - Дозволяє на серверні частині зручно проводити авторизацію
- npm install passport-google-oidc (@types not)
- npm install dotenv --save
- npm install passport-github
- npm i --save-dev @types/passport-github
  SSL
- npm install --save-dev nodemon
- Middlevare
  DB
- npm install --save sequelize
- npm i pg pg-hstore # PostgreSQL
- npm install --save-dev sequelize-cli
- npx sequelize-cli init
- npx sequelize-cli model:generate --name users --attributes fullname:string,username:string,avatarUrl:string,phone:string,isActive:integer,
- npx sequelize-cli model:generate --name Code --attributes code:string,user_id:integer
- npx sequelize-cli db:migrate
- unique: true - унікальні значення
  Upload
- npm i cloudinary Хмара для збереження фото
- npm i multer npm i --save-dev @types/multer Зручний спосіб завантажити файли, передача з фронтенда на бекенд
- npm i nanoid
  SSL
- openssl genrsa -out key.pem
- openssl req -new -key key.pem -out csr.pem
- openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
- chrome://flags Allow invalid SSL
- Let`s Encrypt
  Proxy
- npm install -g local-ssl-proxy
- local-ssl-proxy --source 3003 --target 3000
  Image size
- npm install sharp
- npm install @types/sharp
  SMS
- npm i jsonwebtoken
- npm i --save-dev @types/jsonwebtoken
- npm i passport-jwt
- npm i --save-dev @types/passport-jwt
  Get Cookie
- npm i js-cookie
- fetch("https://localhost:3001/auth/me")
- fetch("https://localhost:3001/auth/me", {headers:{Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMywiZnVsbG5hbWUiOiJQYXZsbyBTZW5pdiIsInVzZXJuYW1lIjoiUGF2bG9TZW5pdiIsImF2YXRhclVybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS83MTM5MzgyNT92PTQiLCJwaG9uZSI6IiIsImlzQWN0aXZlIjowLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTE2VDEyOjU5OjU4LjgwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTE2VDEyOjU5OjU4LjgwMFoifSwiaWF0IjoxNjQ1Mjg0NDI3LCJleHAiOjE2NDc4NzY0Mjd9.fOg1mzs82yK5XWSjYU6W3pCOcgM2bzz_TIbNfNmuO5M"}})
- npm i --save-dev @types/js-cookie

## Pages

### \_app.

- Component: Головний компонент в який збираються решта компонентів

## Lesson

- Lesson 1 - 2.31 Done
- Lesson 2 - 1:33:13 Done
- Lesson 3 - 1.24. Done
- Lesson 4 - 0.9.45 2.15 2.22 3.00 Done
- Lesson 5 - 1.24 1.55 3.02 Done 
- Lesson 6 - 50.00
- Lesson 7 -
- Lesson 8
- Lesson 9
- Lesson 10 -
- Lesson 11 -
- Lesson 12 -
- Lesson 13 -

## Stydy

- useRef
- props
- interface
- ts type
- arrow func
- Hooks
- Context

## TODO PROJECT

- Зміна голосу
- Караоке кімната
