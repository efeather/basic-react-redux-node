class AuthorizationTokenRepository {
    private theAuthorizationToken: string | null = null

    setAuthorizationToken(authorizationToken: string): void {
        this.theAuthorizationToken = authorizationToken
    }

    getAuthorizationToken(): string | null {
        return this.theAuthorizationToken
    }
}

export const authorizationTokenRepository = new AuthorizationTokenRepository()
