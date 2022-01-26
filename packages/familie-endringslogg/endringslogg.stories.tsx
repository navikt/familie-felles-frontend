import React from 'react';
import Endringslogg from './src';

export default {
    component: Endringslogg,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/Endringslogg',
};

export const endringslogg:React.FC = ({...args}) => {
    return <div>

        <div><h2>Normalversjon</h2>
            <Endringslogg
                userId={'userFraStorybook' + new Date()}
                appId={'EF'}
                backendUrl={'https://familie-endringslogg.dev.intern.nav.no/'}
                appName={'Enslig forsørger'}
                {...args}
            /></div>
        <div style={{'backgroundColor': '#262626'}}><h2 style={{color:'white'}}>Lys versjon</h2>
            <Endringslogg
                userId={'userFraStorybook-lys' + new Date()}
                appId={'EF'}
                backendUrl={'https://familie-endringslogg.dev.intern.nav.no/'}
                appName={'Enslig forsørger'}
                stil={'lys'}
                {...args}
            /></div>

    </div>;
};
