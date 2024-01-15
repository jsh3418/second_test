import { create } from "zustand";

type CartItem = {
  id: string;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];

  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  increaseItemQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (item.quantity < 9) {
          item.quantity += 1;
        }
        return { cartItems: [...state.cartItems] };
      }

      return {
        cartItems: [...state.cartItems, { id, quantity: 1 }],
      };
    }),

  decreaseItemQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);

      if (!item) return state;

      item.quantity -= 1;

      if (item.quantity === 0) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== id),
        };
      }

      return { cartItems: [...state.cartItems] };
    }),
}));
