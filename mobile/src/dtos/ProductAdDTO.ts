export type ProductAdDTO = {
    accept_trade: boolean,
    id: string,
    is_new: boolean,
    name: string,
    is_active: true,
    payment_methods: {
        key: string,
        name: string,
    }[]
    price: number,
    product_images: {
        id: string,
        path: string,
    }[]
    user: {
        avatar: string,
    }
}