/// <reference types="react" />
declare const _default: {
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "enkelt-skjema": {
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
        text: string;
    };
    title: string;
};
export default _default;
export declare const EnkeltSkjema: {
    (): JSX.Element;
    parameters: any;
};
