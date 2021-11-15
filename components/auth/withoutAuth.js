/**
 * This component check if you are authenticated and if you don't, this redirect you to the login page.
 */
import React from "react";
import { useRouter } from "next/router";
import FullPageSpinner from "../ui/loaders/FullPageSpinner";
import Layout from "../ui/global/Layout";

import { useSelector } from "react-redux";

const WithoutAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useSelector((state) => state.auth);
    const Router = useRouter();

    const [authStatus, setAuthStatus] = React.useState({
      existToken: false,
      checking: true,
    });

    React.useEffect(() => {
      if (token === null) {
        //Router.replace('/auth/login')
        setAuthStatus({ existToken: false, checking: false });
      } else {
        //<WrappedComponent {...props} />;
        setAuthStatus({ existToken: true, checking: false });
      }
    }, []);

    if (authStatus.existToken === true && authStatus.checking === false) {
      Router.replace("/");
      return null;
    } else if (
      authStatus.existToken === false &&
      authStatus.checking === false
    ) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <Layout>
          <FullPageSpinner />
        </Layout>
      );
    }
  };
};

export default WithoutAuth;
