import {request} from './request'

export function gethomemd() {
    return request({
        url: '/home/multidata'
    })
}

export function gethomegoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}