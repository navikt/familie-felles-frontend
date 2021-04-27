/// <reference types="react" />
import './headerstories.less';
declare const _default: {
    component: ({ tittel, children, brukerinfo, tittelHref, brukerPopoverItems, eksterneLenker, }: import("./src").HeaderProps) => JSX.Element;
    parameters: {
        storySource: {
            source: string;
            locationsMap: {
                "header-og-sok": {
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
export declare const HeaderOgSøk: {
    (): JSX.Element;
    parameters: any;
};
