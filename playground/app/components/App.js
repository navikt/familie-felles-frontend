import Komponent from 'Modules/react-template';
import React from 'react';

import './styles.less';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>Legg til komponenten du vil teste her og gjør endringer i packages</div>
                <Komponent />
            </div>
        );
    }
}
