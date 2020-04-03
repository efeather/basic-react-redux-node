export const isValidAuthToken = (
    authorizationToken: string | null
): boolean => {
    return (
        (authorizationToken &&
            authorizationToken === 'Basic DemoOnlyUseOAuth2') ||
        false
    )
}
