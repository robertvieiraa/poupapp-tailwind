export const Button = ({ children }) => {
  return (
    <button
      className="
    flex 
    items-center 
    justify-center 
    gap-2 
    text-neutral-text 
    text-base 
    leading-[120%] 
    border 
    border-neutral-text 
    rounded-3xl 
    px-6 
    py-2 
    bg-transparent 
    cursor-pointer 
    hover:opacity-80"
    >
      {children}
    </button>
  );
};