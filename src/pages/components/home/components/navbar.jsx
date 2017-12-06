import React from 'react';
import styles from 'css/bulma.css';

class navbar extends React.Component  {

    render() {
        return (
            <div className={styles.navbar} >
                <div className={styles.navbarBrand} >
                    <a className={styles.navbarItem} href="../">
                        <img src="https://intuitmarket.intuitcdn.net/ui/images/QB_logo_site.jpg" alt="logo" />
                    </a>
                    <span className={`${styles.navbarBurger} ${styles.burger}`} data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className={styles.navbarMenu}>
                    <div className={styles.navbarEnd}>
                        <a className={`${styles.navbarItem} ${styles.isActive}`}>Home</a>
                        <a className={styles.navbarItem}>New Request</a>
                        <a className={styles.navbarItem}>Admin</a>
                        <span className={styles.navbarItem} >
                            <div className={styles.content}>
                                {this.props.ssoname}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );

    };
    
}

export default navbar;