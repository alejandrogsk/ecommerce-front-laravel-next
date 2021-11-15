import React from "react";
//Next
import Head from "next/head";
import {useRouter} from 'next/router';
import Link from 'next/link'
//Auth Protection
import WithoutAuth from "../../components/auth/withoutAuth";
//Custom Hook
import useForm from "../../hooks/useForm";
//UI
import Spinner from "../../components/ui/loaders/Spinner";
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Redux Actions
import { startRegister } from '../../redux/auth/authActions';


function Register() {

  const router = useRouter();
  const dispatch = useDispatch();
  const { user, checking, validationError } = useSelector(state => state.auth)

  if ( user ) router.replace('/'); //after a successful login should exist a user

  const [formValues, handleInputChange] = useForm({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
  });

  const {
    email,
    password,
    password_confirmation,
    name,
    last_name,
    phone,
    country,
    state,
    city,
    zip_code,
  } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch( startRegister( formValues ) );
  };

  return (
    <>
    <Head>
        <title>Register</title>
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
            Register your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <input type="hidden" name="remember" value="true" />
          {/*<div className="rounded-md shadow-sm -space-y-px"> */}
          <div
            className="rounded-md shadow-sm grid gap-4 grid-cols-1 sm:grid-cols-2
          "
          >
            {/**Name */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            {/**Last name */}
            <div>
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                onChange={handleInputChange}
              />
            </div>
            {/**Email */}
            <div>
            {validationError && validationError.email && <p className="text-red-500">{validationError.email[0]}</p>}
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
            {/**Phone */}
            <div>
            {validationError && validationError.phone && <p className="text-red-500">{validationError.phone[0]}</p>}
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="343 4807233"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>

            {/**Password */}
            <div>
              {validationError && validationError.password && <p className="text-red-500">{validationError.password[0]}</p>}
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
            {/**Password Confirmation */}
            <div>
              <label htmlFor="password-confirmation" className="sr-only">
                Password
              </label>
              <input
                id="password-confirmation"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleInputChange}
              />
            </div>

            {/**Country */}
            <div>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <input
                id="country"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="United States"
                name="country"
                value={country}
                onChange={handleInputChange}
              />
            </div>
            {/**State */}
            <div>
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                id="state"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Colorado"
                name="state"
                value={state}
                onChange={handleInputChange}
              />
            </div>
            {/**City */}
            <div>
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Denver"
                name="city"
                value={city}
                onChange={handleInputChange}
              />
            </div>
            {/**zip-code */}
            <div>
              <label htmlFor="zip-code" className="sr-only">
                Zip Code
              </label>
              <input
                id="zip-code"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Zip Code"
                name="zip_code"
                value={zip_code}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/**Error message */}
          {/* {registerError && <p className="text-red-500 my-4">{registerError}</p>} */}

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
            <Link href="/auth/login">
            <a className="font-medium text-cyan-600 hover:text-cyan-500">
              Do you already have an account?
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default WithoutAuth(Register);