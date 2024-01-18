import { TYPOGRAPHY } from "@/constants/typography";
import { Product } from "@/types/product";
import Counter from "./Counter";
import { useCartStore } from "./useCartStore";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const cartItems = useCartStore(({ cartItems }) => cartItems);
  const increaseItemQuantity = useCartStore(
    ({ increaseItemQuantity }) => increaseItemQuantity
  );
  const decreaseItemQuantity = useCartStore(
    ({ decreaseItemQuantity }) => decreaseItemQuantity
  );

  const count = cartItems.find((item) => item.id === product.id)?.quantity ?? 0;
  const onPlusClick = () => increaseItemQuantity(product.id, product.price);
  const onMinusClick = () => decreaseItemQuantity(product.id);

  const highlightedItem = count > 0;
  const isEvent = product.event === 1;

  return (
    <div
      className={`${
        TYPOGRAPHY.NORMAL
      } p-[8px] border border-solid border-[#0000004D] flex gap-[15px] box-border rounded-[10px]${
        highlightedItem ? " bg-portlandOrange bg-opacity-10" : ""
      }`}
    >
      <div className="w-[62px] h-[62px] bg-argent shrink-0" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex gap-2 align-center">
          <div className="pt-[2px]">{product.name}</div>
          {isEvent && (
            <div
              className={`${TYPOGRAPHY.SMALL} bg-portlandOrange text-white rounded-[12px] p-[2px_8px_2px_8px] box-border text-[13px]`}
            >
              이벤트
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between">
            <Counter
              count={count}
              onMinusClick={onMinusClick}
              onPlusClick={onPlusClick}
            />
            <div>{product.price.toLocaleString("ko") + "원"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
