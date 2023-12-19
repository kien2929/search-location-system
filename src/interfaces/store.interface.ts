export interface Store {
  id?: number
  name: string
  latitude: number
  longitude: number
  type: StoreType
}

export enum StoreType {
  Supermarket = 1,
  Pharmacy = 2,
  Restaurant = 3,
  Bakery = 4,
  Butcher = 5
}
