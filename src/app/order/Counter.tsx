type Props = {
  count: number;
  onMinusClick: () => void;
  onPlusClick: () => void;
};

export default function Counter({ count, onMinusClick, onPlusClick }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex select-none">
        <div
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={onMinusClick}
        >
          -
        </div>
        <div className="w-[20px] h-[20px]">{count}</div>
        <div className="w-[20px] h-[20px] cursor-pointer" onClick={onPlusClick}>
          +
        </div>
      </div>
      <div>100,000원</div>
    </div>
  );
}
