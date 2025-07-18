import React from 'react';
import Endringslogg from './src';

export default {
    component: Endringslogg,
    title: 'Komponenter/Endringslogg',
};

export const EndringsloggStory: React.FC = ({ ...args }) => {
    return (
        <div>
            <div>
                <h2>Normalversjon</h2>
                <Endringslogg
                    userId={'userFraStorybook' + new Date()}
                    appId={'EF'}
                    backendUrl={'https://familie-endringslogg.intern.dev.nav.no/'}
                    appName={'Enslig forsørger'}
                    {...args}
                />
            </div>
            <div style={{ backgroundColor: '#262626' }}>
                <h2 style={{ color: 'white' }}>Lys versjon</h2>
                <Endringslogg
                    userId={'userFraStorybook-lys' + new Date()}
                    appId={'EF'}
                    backendUrl={'https://familie-endringslogg.intern.dev.nav.no/'}
                    appName={'Enslig forsørger'}
                    stil={'lys'}
                    {...args}
                />
            </div>
        </div>
    );
};
