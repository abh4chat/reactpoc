import React from 'react';
import axios from 'axios';
import styles from '../../css/bulma.css';
import SSOsignin from '../Auth';
import SysUsers from '../SysUsers';
import NavBar from '../NavBar';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
console.log(styles);


class Home extends React.Component {

    render() {
        const herostyles = styles.hero + ' ' + styles.isLink + ' ' + styles.isBold;
        const navitemstyle = styles.navbarItem + ' ' +styles.isOutlined ;
      
        return (
                <div>
                    <section className={herostyles} >
                        <NavBar ssoname = {<SSOsignin/>} >  
                        </NavBar>

                        <div className={styles.heroBody}>
                            <div className={`${styles.container}  ${styles.hasTextCentered}`} >
                                <h1 className={styles.title} > Source Code </h1>
                                <h2 className={styles.subtitle}>  Request for a Source Code from this application</h2>
                            </div>
                        </div> 
                    </section>
                    <div className={styles.content}>
                        <SysUsers />
                    </div>
                </div>  
        );
    }
}
export default Home;

