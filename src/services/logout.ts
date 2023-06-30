import { toast } from "react-toastify";
import {
  removeTokenFromSessionStorage,
  removeUserIdFromSessionStorage,
} from "../utils/sessionStorage";

export function logout() {
  removeTokenFromSessionStorage();
  removeUserIdFromSessionStorage();
  toast.info("Thank you for visiting us!", { autoClose: 3000 });
}
