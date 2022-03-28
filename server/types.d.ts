
import { UserProps } from "../pages";

declare global {
  namespace Express {
    interface User extends UserProps {}
  }
}