import Header from "./Header";
import OrderSummary from "./OrderSummary";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full max-w-mobile h-full relative">
        <Header />
        {children}
        <OrderSummary />
      </div>
    </div>
  );
}
