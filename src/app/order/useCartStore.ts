import { create } from "zustand";

type CartItem = {
  id: string;
  quantity: number;
  price: number;
};

type CartStore = {
  cartItems: CartItem[];

  increaseItemQuantity: (id: string, price: number) => void;
  decreaseItemQuantity: (id: string) => void;
};

const MAX_QUANTITY = 999;

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  increaseItemQuantity: (id, price) =>
    set((state) => {
      const { cartItems } = state;
      const item = cartItems.find((item) => item.id === id);

      if (item) {
        if (item.quantity < MAX_QUANTITY) {
          item.quantity += 1;
        }
        return { cartItems: [...cartItems] };
      }

      return {
        cartItems: [...cartItems, { id, price, quantity: 1 }],
      };
    }),

  decreaseItemQuantity: (id) =>
    set((state) => {
      const { cartItems } = state;
      const item = cartItems.find((item) => item.id === id);

      if (!item) return state;

      item.quantity -= 1;

      if (item.quantity === 0) {
        return {
          cartItems: cartItems.filter((item) => item.id !== id),
        };
      }

      return { cartItems: [...cartItems] };
    }),
}));
