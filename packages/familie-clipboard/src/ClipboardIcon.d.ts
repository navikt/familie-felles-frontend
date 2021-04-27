/// <reference types="react" />
interface IProps {
    type: 'check' | 'copy';
    size?: number;
}
declare const ClipboardIcon: {
    ({ type, size }: IProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            type: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            size: {
                defaultValue: {
                    value: number;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export default ClipboardIcon;
