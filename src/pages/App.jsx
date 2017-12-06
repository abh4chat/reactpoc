import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/bulma.css';
import Home from "./components/home/home";
import { CookiesProvider } from 'react-cookie';

class App extends React.Component {

    render() {
        const herostyles = styles.hero + ' ' + styles.isInfo + ' ' + styles.isMedium + ' ' + styles.isBold;
        return (
            <CookiesProvider >
                <div>
                    <Home />
                </div>
            </CookiesProvider >
        );
    }
}
export default App;