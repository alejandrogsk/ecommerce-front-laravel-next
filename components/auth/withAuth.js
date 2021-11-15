/**
 * This component check if you are authenticated and if you don't, this redirect you to the login page.
 */

import React from "react";
import { useRouter } from "next/router";

import Layout from "../ui/global/Layout";
import FullPageSpinner from "../ui/loaders/FullPageSpinner";

import { useSelector } from "react-redux";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useSelector((state) => state.auth);
    const Router = useRouter();

    const [authStatus, setAuthStatus] = React.useState({
      existToken: false,
      checking: true,
    });

    React.useEffect(() => {
      if (token === null) {
        setAuthStatus({ existToken: false, checking: false });
      } else {
        setAuthStatus({ existToken: true, checking: false });
      }
    }, []);

    if (authStatus.existToken === true && authStatus.checking === false) {
      return <Layout><WrappedComponent {...props} /></Layout>
    } else if (
      authStatus.existToken === false &&
      authStatus.checking === false
    ) {
      Router.replace("/");
      return null;
    } else {
      return (
        <Layout>
          <FullPageSpinner />
        </Layout>
      );
    }
  };
};
export default WithAuth;
