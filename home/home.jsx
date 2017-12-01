import React from 'react';
import axios from 'axios';
import styles from '../css/bulma.css';
import SSOsignin from '../components/Auth';
import SysUsers from '../components/SysUsers';

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
                        <div className={styles.navbar} >
                            <div className={styles.navbarBrand} >
                                <a className={styles.navbarItem} href="../">
                                    <img src="https://intuitmarket.intuitcdn.net/ui/images/QB_logo_site.jpg" alt="logo"/>
                                </a>
                                <span className={`${styles.navbarBurger} ${styles.burger}` } data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className= {styles.navbarMenu}>
                                <div className= {styles.navbarEnd}>
                                    <a className= { `${styles.navbarItem} ${styles.isActive}` }>Home</a>
                                <a className={navitemstyle}>New Request</a>
                                    <a className= {styles.navbarItem}>Admin</a>
                                    <span className= {styles.navbarItem} >
                                        <div className= {styles.content}>
                                                <SSOsignin />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

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

