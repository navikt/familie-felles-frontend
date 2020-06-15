import React from 'react';
import { FamilieLesefelt } from './FamilieLesefelt';

export default {
    component: FamilieLesefelt,
    parameters: {
        componentSubtitle: 'Et tekstfelt med som tar inn label og verdi',
    },
    title: 'Komponenter/FamilieLesefelt',
};

export const FamilieLesefeltStory = () => {
    return (
        <div className={'story-elements'}>
            <FamilieLesefelt label={'Label'} verdi={'Verdi'} />
        </div>
    );
};
