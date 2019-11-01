
// to determine the kind of component that will render if the onsubmit fetch
// of the ConvertForm component is for cryptocurrency or national country
// the redirect will either render cryptocResult Component or countryResult Component
// the default will always redirect to cryptoResult component
export const REDIRECT_TO_NATIONAL_COMPONENT = 'REDIRECT_TO_NATONAL_COMPONENT'

export const redirectToNational = () => ({
    type: REDIRECT_TO_NATIONAL_COMPONENT,
    payload: true
})