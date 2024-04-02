import axios from 'axios';
export async function fetchInfoUsingToken(token) {
  return axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
  );
}

export function settingTokenInLocalStorage(token) {
  localStorage.setItem('userToken', token);
}
export function removeTokenFromLocalStorage() {
  localStorage.removeItem('userToken');
}
