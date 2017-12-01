import React from 'react';
import ReactDOM from 'react-dom';
import SysUsers from './components/SysUsers';
import SSOsignin from './components/Auth';
import styles from './css/bulma.css';
import Home from "./home/home.jsx";

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

ReactDOM.render(<App />, document.getElementById('app'));
console.log("App Rendering from Main");