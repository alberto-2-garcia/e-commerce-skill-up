import { http, HttpResponse, PathParams } from 'msw'
import { LOGIN_PATH } from '../../constants/apiConstants';
import userFixture from './_fixtures/user.json'
import { LoginFormValues } from '../../constants/userTypes';

export const userHandlers = [
  http.post<PathParams, LoginFormValues>(`${LOGIN_PATH}`, async ({ request }) => {
    const data = await request.json()
    const { email, password } = data
    if (email === 'test@test.test' && password === 'test1234') {
      return HttpResponse.json(
        userFixture,
        { status: 200 }
      )
    }
    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  }),
]
