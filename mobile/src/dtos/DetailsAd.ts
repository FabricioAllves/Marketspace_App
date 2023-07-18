export type DetailsAd = {
  accept_trade: boolean,
  created_at: string,
  description: string,
  id: string,
  is_active: true,
  is_new: boolean,
  name: string,
  payment_methods: {
    key: string,
    name: string,
  }[]
  price: number,
  product_images: {
    product_images: any
    id: string,
    path: string,
  }[]
  updated_at: string,
  user: {
    avatar: string,
    name: string,
    tel: string,
  },
  user_id: string,
}




