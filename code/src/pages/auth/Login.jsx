import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '../../utils/lib/schema';
import { Link, useNavigate } from 'react-router-dom';
import useApiRequest from '../../hooks/useRequestApi';
import { useAuth } from '../../provider/AuthProvider';
import { useGoogleLogin } from '@react-oauth/google';
import {
  fetchInfoUsingToken,
  settingTokenInLocalStorage,
} from '../../utils/gooogle-auth';
import { useState } from 'react';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const navigate = useNavigate();
  const [isFetchingGoogle, setIsFetchingGoogle] = useState(false);
  const { isPending, mutationFunction } = useApiRequest();
  const { setToken } = useAuth();
  const onSubmit = (data) => {
    mutationFunction({
      path: 'auth/login-email',
      data,
      callback(res) {
        settingTokenInLocalStorage(res?.data?.data?.token);
        setToken(res?.data?.data?.token);
        navigate('/');
      },
    });
  };
  const loginUsingGoogle = useGoogleLogin({
    onError(err) {
      console.log('Error logging in', err);
    },
    onSuccess(res) {
      setIsFetchingGoogle(true);
      fetchInfoUsingToken(res.access_token)
        .then((data) => {
          setIsFetchingGoogle(false);
          const profileData = data.data;
          mutationFunction({
            data: {
              email: profileData.email,
            },
            path: 'auth/login-google',
            callback(res) {
              console.log(res);
              setToken(res?.data?.data?.token);
              settingTokenInLocalStorage(res?.data?.data?.token);
              navigate('/');
            },
          });
        })
        .catch((err) => {
          console.log('Error fetching user detailds', err);
        });
    },
  });
  return (
    <div className="flex h-dvh items-center justify-center bg-white ">
      <form
        className=" w-[90%] rounded-lg border   p-[20px] shadow-form md:w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-[10px]">
          <h1 className=" text-xl font-semibold text-black">Login</h1>
          <p className="text-sm ">
            Enter your email below to login to your account
          </p>
        </div>

        <fieldset
          className="space-y-[15px]"
          disabled={isPending || isFetchingGoogle}
        >
          <Input
            placeholder={'Email'}
            labelClassName={'text-black'}
            {...register('email')}
            label="Email"
            error={errors?.email?.message}
          />
          <Input
            placeholder={'Password'}
            labelClassName={'text-black'}
            {...register('password')}
            label="Password"
            type="password"
            error={errors?.password?.message}
          />
          <Button className={'w-full bg-black  text-white hover:bg-black/90'}>
            Login
          </Button>
        </fieldset>

        <div className="mt-[5px] flex w-full flex-col items-center justify-center space-y-[7px]">
          <span className="text-black">Or</span>
          <Button
            className={
              'w-full bg-black text-[15px] text-white hover:bg-black/90'
            }
            disabled={isPending || isFetchingGoogle}
            onClick={loginUsingGoogle}
            type="button"
          >
            Login with Google
          </Button>
          <span className="text-sm  text-black">
            Don't have account?
            <Link to={'/auth/signup'} className="ml-[5px] underline">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
