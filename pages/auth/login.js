import React from "react";
//Next
import Head from "next/head";
import { useRouter } from "next/router";
import Link from 'next/link'

//Auth Protection
import WithoutAuth from "../../components/auth/withoutAuth";
//Custom Hooks
import useForm from "../../hooks/useForm";
//UI
import Spinner from "../../components/ui/loaders/Spinner";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Action Redux
import { startLogin } from "../../redux/auth/authActions";

function Login() {
  const router = useRouter();

  const { user, checking, loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (user) router.replace("/"); //after a successful login should exist a user

  const [ formValues, handleInputChange ] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(startLogin(email, password));
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-medium	 text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/**Error message */}
            {loginError && <p className="text-red-500 my-4">{loginError}</p>}

            {/**Submit Button */}
            <div>
              {checking ? (
                <Spinner height={12} width={12} />
              ) : (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              )}
            </div>
          </form>

          <div className="flex justify-center">
            <div className="text-sm">
              <Link href="/auth/register">
              <a className="font-medium text-cyan-600 hover:text-cyan-500">
                Don't have an account yet?
              </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default WithoutAuth(Login);
