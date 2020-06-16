import React from 'react';
import { FamilieLesefelt } from './FamilieLesefelt';

export default {
    component: FamilieLesefelt,
    parameters: {
        componentSubtitle: 'Et tekstfelt med som tar inn label og verdi',
    },
    title: 'Komponenter/Form-elementer/FamilieLesefelt',
};

export const FamilieLesefeltStory: React.FC = () => {
    return (
        <div className={'story-elements'}>
            <FamilieLesefelt label={'Label'} verdi={'Verdi'} />
        </div>
    );
};
