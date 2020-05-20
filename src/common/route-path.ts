export const RoutePath = new (class {
    get base(): string {
        return '/basicapp'
    }

    get webAPI(): string {
        return `/webapi`
    }
    get about(): string {
        return '/about'
    }
    get test1(): string {
        return `${this.webAPI}/test1`
    }
})()
