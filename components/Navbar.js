import Link from 'next/link';
import React, {Component} from 'react'
import Auth from '../lib/Auth';
const auth = new Auth();

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
                <button onClick={()=>this.logout()}>
                    Logout
                </button>
                <Link href="/secure-index">
                    <a className="navbar-brand">Notes App</a>
                </Link>
                <Link href="/new">
                    <a className="create">Create note</a>
                </Link>
            </div>
            
        )
    }
}
