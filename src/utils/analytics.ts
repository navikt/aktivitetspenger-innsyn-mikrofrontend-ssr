import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

const logger = getAnalyticsInstance('dekoratoren');

export const logCardClick = async (url: string) => {
    logger('navigere', { lenketekst: 'Dine aktivitetspenger', destinasjon: url });
};
