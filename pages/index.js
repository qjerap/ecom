import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect } from "react";
import client from "../helper/sanity";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setLoadedState,
} from "../redux/slices/counterSlice";
import { loadState, saveState } from "../helper/localStorage";

//Components
import Header from "../components/header/home";
import Categories from "../components/categories/index";

export default function Home({ data }) {
  console.log(data);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const local = loadState();
    dispatch(setLoadedState(local));
  }, []);
  useEffect(() => {
    saveState(count);
  }, [count]);

  const [session, loading] = useSession();

  return (
    <div>
      <Head>
        <title>Ecom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories/>
      {
        // <div className={`container thisisok`}>
        //   <div>{count}</div>
        //   <button onClick={() => dispatch(increment())}>+</button>
        //   <button onClick={() => dispatch(decrement())}>-</button>

        //   <h1 className={styles.title}>morbi interdum</h1>

        //   {!session && (
        //     <>
        //       Not signed in <br />
        //       <button className="btn btn--1" onClick={() => signIn()}>
        //         Sign In
        //       </button>
        //     </>
        //   )}
        //   {session && (
        //     <>
        //       Signed in as {session.user.email} <br />
        //       <button onClick={() => signOut()}>Sign out</button>
        //     </>
        //   )}
        // </div>
      }
    </div>
  );
}

// Create a query called homepageQuery
const homepageQuery = `*[_type == "product"]`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);

  const data = { homepageData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
