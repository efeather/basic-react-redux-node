import { RoutePath } from '../../common'

export const fetchVersion = async (
    authorizationToken: string
): Promise<string> => {
    const headers = new Headers()
    headers.append('Authorization', authorizationToken)

    const request = new Request(RoutePath.webAPI, {
        method: 'GET',
        headers: headers,
    })

    return await fetch(request)
        .then(response => response.json())
        .then(data => data.feature)
}
