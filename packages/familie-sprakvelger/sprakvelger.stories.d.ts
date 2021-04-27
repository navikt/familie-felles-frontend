import React from 'react';
import { LocaleType } from './src/typer';
declare const _default: {
    component: React.FC<{
        støttedeSprak: LocaleType[];
    }>;
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "familie-sprakvelger": {
                    startLoc: {
                        col: number;
                        line: number;
                    };
                    endLoc: {
                        col: number;
                        line: number;
                    };
                    startBody: {
                        col: number;
                        line: number;
                    };
                    endBody: {
                        col: number;
                        line: number;
                    };
                };
            };
        };
        componentSubtitle: string;
    };
    title: string;
};
export default _default;
export declare const FamilieSprakvelger: React.FC;
