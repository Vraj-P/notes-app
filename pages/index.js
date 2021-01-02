// import React from 'react'
// import Link from 'next/link';
// import Head from '../components/head'
// import Container from "@material-ui/core/Container"
// import { Typography } from '@material-ui/core';

// const Home = () => (
//     <div className="index-home-container">
//       <Head title="Home" />
  
//         <Container className="index-home-bg">
//           <Typography align="center" component="h1" variant="h1">Welcome to The Notes App!</Typography>
//         </Container>

//     </div>
//   )
  
//   export default Home


import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';

function Home() {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Head>
        <title>Welcome to landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Simplest login</h1>

      <h2>Proudly using Next.js, Mongodb and deployed with Now</h2>
      {loggedIn && (
        <>
          <p>Welcome {data.email}!</p>
          <button
            onClick={() => {
              cookie.remove('token');
              revalidate();
            }}>
            Logout
          </button>
        </>
      )}
      {!loggedIn && (
        <>
          <Link href="/login">Login</Link>
          <p>or</p>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default Home;