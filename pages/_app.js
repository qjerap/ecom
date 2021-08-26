import "../styles/main.scss";

import { Provider as AuthProvider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store/store";
import Layout from "../components/layout/index";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ReduxProvider>
  );
}
