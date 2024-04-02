import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../utils/lib/schema';
import { Link } from 'react-router-dom';
import useApiRequest from '../../hooks/useRequestApi';
import { useGoogleLogin } from '@react-oauth/google';
import { fetchInfoUsingToken } from '../../utils/gooogle-auth';
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const { isPending, mutationFunction } = useApiRequest({
    isSuccessToast: true,
  });
  const onSubmit = (data) => {
    mutationFunction({
      path: 'auth/signup-by-email',
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  };
  const googleSignUp = useGoogleLogin({
    onError(err) {
      console.log(err);
    },
    onSuccess(token) {
      fetchInfoUsingToken(token.access_token).then((data) => {
        const profileData = data.data;
        mutationFunction({
          data: {
            name: profileData.name,
            email: profileData.email,
            profile_image: profileData.picture,
          },
          path: 'auth/signup-by-google',
          callback(res) {
            console.log(res);
          },
        });
      });
    },
  });
  return (
    <div className="flex h-dvh items-center justify-center bg-white ">
      <form
        className=" shadow-form w-[90%] rounded-lg   border p-[20px] md:w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-[10px]">
          <h1 className=" text-xl font-semibold text-black">Sign Up</h1>
          <p className="text-sm ">
            Enter your information to create an account
          </p>
        </div>

        <fieldset className="space-y-[15px]" disabled={isPending}>
          <Input
            placeholder={'Name'}
            labelClassName={'text-black'}
            {...register('name')}
            label="Name"
            error={errors?.name?.message}
          />
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
            Sign up with Email
          </Button>
        </fieldset>

        <div className="mt-[5px] flex w-full flex-col items-center justify-center space-y-[7px]">
          <span className="text-black">Or</span>
          <Button
            className={
              'w-full bg-black text-[15px] text-white hover:bg-black/90'
            }
            type="button"
            disabled={isPending}
            onClick={() => googleSignUp()}
          >
            Sign up with Google
          </Button>
          <span className="text-sm  text-black">
            Don't have account?
            <Link to={'/auth/login'} className="ml-[5px] underline">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
