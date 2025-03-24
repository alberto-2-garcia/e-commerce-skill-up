import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/userSlice';
import { loginUser } from '../../api/user/user';

export default function useUser() {
  const dispatch = useDispatch();

  const {
    mutate: login,
    ...loginState
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setUserData(data));
    },
    onError: (err) => {
      console.error('Login error:', err);
    },
  });

  return {
    login,
    loginState
  };
}
