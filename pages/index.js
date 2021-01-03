import React from 'react'
import Link from 'next/link';
import Head from '../components/head'
<<<<<<< Updated upstream
import Nav from '../components/nav'

const Home = () => (
    <div>
      <Head title="Home" />
      <Nav />
  
      <div className="hero">
        <h1 className="title">Welcome to Next + Auth0 !</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>
  
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
=======
import Container from "@material-ui/core/Container"
import { Typography } from '@material-ui/core';

const Home = () => (
    <div className="index-home-container">
      <Head title="Home" />
  
        <Container className="index-home-bg">
          <Typography align="center" component="h1" variant="h1">Welcome to The Notes App!</Typography>
        </Container>

>>>>>>> Stashed changes
    </div>
  )
  
  export default Home