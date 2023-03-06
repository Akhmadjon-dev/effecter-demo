export interface Order {
  _id: string;
  orderNumber: string;
  orderSpecifics: OrderSpecifics;
}

export type OrderSpecifics = OrderWarranty | OrderAcceptance;

export interface OrderWarranty {
  __kind: 'warranty';
  warrantyEnd: Date;
}

export interface OrderAcceptance {
  __kind: 'acceptance';
  releaseDate: Date;
}
