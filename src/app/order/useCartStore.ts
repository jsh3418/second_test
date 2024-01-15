import { create } from "zustand";

type CartItem = {
  id: string;
  count: number;
};

type CartStore = {
  cartItems: CartItem[];

  increaseItemCount: (id: string) => void;
  decreaseItemCount: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  increaseItemCount: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (item.count < 9) {
          item.count += 1;
        }
        return { cartItems: [...state.cartItems] };
      }

      return {
        cartItems: [...state.cartItems, { id, count: 1 }],
      };
    }),

  decreaseItemCount: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);

      if (!item) return state;

      item.count -= 1;

      if (item.count === 0) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== id),
        };
      }

      return { cartItems: [...state.cartItems] };
    }),
}));
