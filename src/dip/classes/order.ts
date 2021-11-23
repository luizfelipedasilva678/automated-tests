import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shop-cart-protocol';
import { MessagingProtocol } from './interfaces/messagin-protocol';
import { PersistenceProtocol } from './interfaces/persistence-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly saveOrder: PersistenceProtocol,
    private readonly Customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your order with total of ${this.cart.totalWidthDiscount()} was received`,
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(this.Customer.getName());
  }
}
