import { IAuthDetail } from "../types/authDetail.interface";
import {
  addTokenToSessionStorage,
  addUserIdToSessionStorage,
} from "../utils/sessionStorage";
import { axiosInstance } from "./apiClient";

export async function login(authDetail: IAuthDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    data: JSON.stringify(authDetail),
  };

  const response = await axiosInstance("/login", requestOptions);

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const sessionStorageData = await response.data;
  const hasAccessToken = sessionStorageData.accessToken;

  if (hasAccessToken) {
    addTokenToSessionStorage(hasAccessToken);
    addUserIdToSessionStorage(sessionStorageData.user.id);
  }

  return sessionStorageData;
}
