import React from 'react'
import Link from 'next/link';
import Head from '../components/head'
import Container from "@material-ui/core/Container"
import { Typography } from '@material-ui/core';

const Home = () => (
    <div className="index-home-container">
      <Head title="Home" />
  
        <Container className="index-home-bg">
          <Typography align="center" component="h1" variant="h1">Welcome to The Notes App!</Typography>
        </Container>

    </div>
  )
  
  export default Home