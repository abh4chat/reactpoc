import React from 'react';
import axios from 'axios';
import styles from 'css/bulma.css';

class SysUsers extends React.Component {
    constructor(){
        super();
        this.state = {
            usersdata : []
        }
    }
    componentWillMount() {
        this.getUsers();
    }
    
    getUsers () {
        axios('http://localhost:3000/api/SrcCdReq_Users')
        .then(response => {
            this.setState( {usersdata : response.data});
            console.log(response.data);
        });
    }

    render() {
        const userlist = this.state.usersdata.map((user, i) => {
            return (
            <li> {user.SrcCdReq_User_name} </li>
            );
        });
        return (
            <div className={styles.hero}>
                 <ul>
                    {userlist}
                </ul>
            </div>
        );
    }
}
export default SysUsers;