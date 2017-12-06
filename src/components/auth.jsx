import React from 'react';
import axios from 'axios';
import styles from '../css/bulma.css';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Auth extends React.Component {

    constructor() {
        const propTypes = {
            cookies: instanceOf(Cookies).isRequired
        }
        super();
        console.log("AuthComponent");
        this.state = {
            usersdata: []
        }
    }
    componentWillMount() {
        this.checkAuth();
    }

    getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
        );
    }

    getAuth() {
        console.log("get Auth");
        const authUrl = "https://authenticate.intuit.com/AuthenticationService/?partner=INTUITMARKET";
        const authController = "&returnpath=http://localhost:3000/api/SrcCdReq_Users";
        const returnPage = "?ret=" + document.location.href + "&getlogin=true";
        var authUrlv = authUrl + authController + returnPage;
        console.log(authUrlv);
        window.location = authUrlv;
    }

    checkAuth() {
        const { cookies } = this.props;
        var userid = cookies.get("IMCosmosAuthId");
        this.state.userid = userid;
        console.log("Check auth");
        if (!userid) {
            this.getAuth();
        }
    }

    render() {
        return (
            <span> Authentication Success:  {this.state.userid} </span>
        );
    }
}
export default withCookies(Auth);