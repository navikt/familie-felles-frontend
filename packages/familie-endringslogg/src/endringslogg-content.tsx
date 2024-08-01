import classNames from 'classnames/dedupe';
import React from 'react';
import { EndringsloggEntryWithSeenStatus } from './utils/endringslogg-custom';
import './endringslogg.css';
import { TourModalButton } from './modal/tour-modal/tour-modal-button';
import { Heading, Label, Link } from '@navikt/ds-react';
import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { PortableText } from '@portabletext/react';

interface EndringsloggContentProps {
    innleggsListe: EndringsloggEntryWithSeenStatus[];
    dataset: string;
}

export const EndringsloggLink = (props: { linkText: string; link: string }) => {
    return (
        <Link className={'endringslogg-link'} target="_blank" href={props.link}>
            {props.linkText ? props.linkText : props.link}
            <ExternalLinkIcon
                fr="mask"
                className={'linkikon'}
                onResize={undefined}
                onResizeCapture={undefined}
            />
        </Link>
    );
};

export const EndringsloggContent = (props: EndringsloggContentProps) => {
    const content = props.innleggsListe.map((endring, index) => {
        return <EndringsloggEntry key={index} endring={endring} dataset={props.dataset} />;
    });

    return <>{content}</>;
};

const isoTimeStringToDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
        date.getDate() +
        '. ' +
        date.toLocaleString('no-NO', { year: 'numeric', month: 'long' }).toLowerCase()
    );
};

export interface EndringsloggEntryProps {
    endring: EndringsloggEntryWithSeenStatus;
    dataset: string;
}
const EndringsloggEntry = (props: EndringsloggEntryProps) => {
    const { dataset, endring } = props;
    return (
        <div className={classNames('endringslogg-rad', 'endringslogg-skille')}>
            <div className={'endringslogg-datolinje'}>
                <div
                    role={endring.seen ? 'alert' : ''}
                    aria-label={endring.seen ? 'Nye endringer i Arbeidsrettet oppfølging' : ''}
                    className={classNames('endringslogg-info-kolonne', {
                        'endringslogg-info-nye-notifikasjoner': !endring.seen,
                    })}
                />
                <Label size={'small'}>{isoTimeStringToDate(endring.date!)}</Label>
            </div>
            <div className={classNames('endringslogg-innhold', 'endringslogg-kolonne')}>
                <Heading size="small" level="2">
                    {endring.title}
                </Heading>
                {endring.description && (
                    <div className={'endringslogg-block-content'}>
                        <PortableText value={endring.description} />
                    </div>
                )}
                {endring.modal && (
                    <TourModalButton
                        dataset={dataset}
                        id={endring._id}
                        modal={endring.modal}
                        buttonText="Se hvordan"
                        forced={endring.forced}
                    />
                )}
                {endring.link && endring.linkText && (
                    <EndringsloggLink linkText={endring.linkText} link={endring.link} />
                )}
            </div>
        </div>
    );
};
