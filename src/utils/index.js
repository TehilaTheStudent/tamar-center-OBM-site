export function createPageUrl(pageName) {
    return '/' + pageName.toLowerCase().replace(/ /g, '-');
}

export const CONTACT_EMAIL = 'TAMAR@OBM.CO.IL';

/** Opens Gmail compose in the browser (works without a local mail app). */
export function gmailComposeUrl({ to = CONTACT_EMAIL, subject = '', body = '' } = {}) {
    const params = new URLSearchParams({ view: 'cm', fs: '1', to });
    if (subject) params.set('su', subject);
    if (body) params.set('body', body);
    return `https://mail.google.com/mail/?${params.toString()}`;
}

export const contactEmailLinkProps = {
    href: gmailComposeUrl(),
    target: '_blank',
    rel: 'noopener noreferrer',
};