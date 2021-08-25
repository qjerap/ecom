import "../styles/globals.css";

import { Provider as AuthProvider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store/store";

export default function App({ Component, pageProps }) {

  return (
    <ReduxProvider store={store}>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </ReduxProvider>
  );
}
