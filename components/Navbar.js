import Link from 'next/link';
import React, {Component} from 'react'
import Auth from '../lib/Auth';
const auth = new Auth();
import Box from "@material-ui/core/Box"
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container"
import Nav from "./nav"
import Grid from "@material-ui/core/Grid"

export default class SecurePage extends Component{
    
    // componentDidMount(){
    //     var user_data = localStorage.getItem('user_details');
    //     var isLoggedIn = localStorage.getItem('isLoggedIn');
    //     if(!isLoggedIn || !user_data){
    //         window.location.replace('/')
    //     }
    // }

    logout(){
        auth.logout()
    }

    render(){
        return(
            <div className="navbar">
                <Grid container>
                    <Grid item xl={4} className="logo-container">
                        <Box p={4} pr={5} pl={5} >
                            <Link className="logo-link" href="/secure-index">
                                <Typography component="h1" variant="h1" style={{color:'#33322A'}}>The Text Editor</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xl={8} style={{display: 'flex', flexDirection: 'row'}}>
                        <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
                            <Grid item>
                                <Link  href="/secure-index">
                                    <Typography style={{color:'#33322A'}} component="h3" variant="h3">Home</Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Nav/>
                            </Grid>
                            <Grid item>
                                <div onClick={()=>this.logout()}>
                                    <Typography style={{color:'#33322A'}} component="h3" variant="h3">Logout</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            
        )
    }
}
