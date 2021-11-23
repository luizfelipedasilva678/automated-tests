import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWidthDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
