import { ReduxState, Record, Identifier } from 'ra-core';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
  theme: ThemeName;
}

export interface Category extends Record {
  name: string;
}

export interface Product extends Record {
  categoryId: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export interface Customer extends Record {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  firstSeen: string;
  lastSeen: string;
  hasOrdered: boolean;
  latestPurchase: string;
  hasNewsLetter: boolean;
  groups: string[];
  nbOrders: number;
  totalSpent: number;
}

export interface Order extends Record {
  orderItem: OrderItemItem[];
  date: Date;
  total: number;
}

export interface OrderItemItem {
  productId: string;
  quantity: number;
}

/**
 * Types to eventually add in react-admin
 */
export interface FieldProps<T extends Record = Record> {
  addLabel?: boolean;
  label?: string;
  record?: T;
  source?: string;
}

export interface Review extends Record {
  customerId: string;
}
