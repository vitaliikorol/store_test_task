export interface ClothItem {
  name: string,
  maker: string,
  price: number,
  age: number,
  popularity: number,
  description: string,
  description_additional?: string,
  color?: string,
  composition?: string,
  care?: string,
  article_no: string,
  sizes: number[],
  product_images: string[],
  left_in_stock: number
}
