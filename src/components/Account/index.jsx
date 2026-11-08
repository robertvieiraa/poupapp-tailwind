import { IconBank } from "../icons";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const Account = ({ item }) => {
  return (
    <div className="flex justify-between items-center text-neutral-text text-[15px] leading-[120%]">
      <div className="flex items-center gap-2 font-bold">
        <IconBank />
        <p>{item.bank}</p>
      </div>
      <div className="flex gap-2 flex-col w-[120px]">
        <p className="font-bold">Saldo</p>
        <p>{formater.format(item.balance)}</p>
      </div>
    </div>
  );
};