export const logEvent = (logTag: string, fields?: object, tags?: object): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const frontendlogger = (window as any).frontendlogger;

    if (process.env.REACT_APP_MOCK) {
        console.log('Event', logTag, 'Fields:', fields, 'Tags:', tags); // tslint:disable-line
    } else if (frontendlogger?.event) {
        frontendlogger.event(logTag, fields ? fields : {}, tags ? tags : {});
    }
};
