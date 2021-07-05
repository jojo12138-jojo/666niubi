import {request} from './request'

//商品id
export function getdetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//商品
export class goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newprice = itemInfo.price
        this.oldprice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realprice = itemInfo.lowNowPrice
    }
}

//商店
export class shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodscount = shopInfo.cGoods
    }
}