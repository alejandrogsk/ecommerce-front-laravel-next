import 'tailwindcss/tailwind.css';
import "nprogress/nprogress.css";
import "../styles/nProgressColor.css";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from '../redux/store';

import dynamic from 'next/dynamic'


const TopProgressBar = dynamic(
  () => {
    return import("components/ui/loaders/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <TopProgressBar />
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
  );
}

export default MyApp
