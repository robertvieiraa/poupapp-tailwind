export const ListItem = ({ children }) => {
  return (
    <li
      className="
    pb-4 
    mb-4 
    border-b 
    border-neutral-header 
    last:pb-0 
    last:mb-0 
    last:border-none"
    >
      {children}
    </li>
  );
};