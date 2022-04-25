interface ImageAssets {
  _ref: string
  _type: string
}

interface ProductSlug {
  _type: string
  current: string
}

export interface Image {
  _key: string,
  _type: string
  asset: ImageAssets
}

export interface Product {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  details: string
  image: Image[],
  name: string
  price: number,
  slug: ProductSlug
}

export interface BannerData {
  smallText: string
  midText: string
  largeText1: string
  largeText2: string
  image: string
  product: string
  buttonText: string
  desc: string
  discount: string
  saleTime: string
}
