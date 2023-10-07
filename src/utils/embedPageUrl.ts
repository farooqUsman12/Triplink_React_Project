

export const embedPageUrl = (embededUrl: string) => {
    window?.history?.pushState(null, '', embededUrl);
    window?.scrollTo({top: 0 , behavior:'smooth'});
}