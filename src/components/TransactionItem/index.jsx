const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionItem = ({ item }) => {
  let detailAdditionalClassName =
    item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";

  return (
    <div className="flex justify-between">
      <div
        className={`
      flex 
      flex-col 
      gap-2 
      text-[15px] 
      leading-[120%] 
      ${detailAdditionalClassName}`}
      >
        <p className="m-0 font-bold">{item.description}</p>
        <p className="m-0">{formater.format(item.value)}</p>
      </div>
      <div className="text-sm leading-5 text-neutral-text">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};