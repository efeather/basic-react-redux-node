export const isValidAuthToken = (
    authorizationToken: string | undefined
): boolean => {
    return (
        (authorizationToken &&
            authorizationToken === 'Basic DemoOnlyUseOAuth2') ||
        false
    )
}
