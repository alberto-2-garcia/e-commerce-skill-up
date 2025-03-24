import axios from 'axios';
import { LoginFormValues } from '../../constants/userTypes';
import { LOGIN_PATH } from '../../constants/apiConstants'

export async function loginUser({ email, password }: LoginFormValues) {
  const response = await axios.post(LOGIN_PATH, { email, password });
  return response.data;
}
