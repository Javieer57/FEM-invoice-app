const pillBtnTheme = {
  lightPurple:
    "bg-purple100 text-purple300 hover:bg-purple200 focus-visible:bg-purple200 transition-colors",
  orange:
    "bg-orange600 text-white hover:bg-orange200 focus-visible:bg-orange200 transition-colors",
  purple:
    "bg-purple900 text-white hover:bg-purple400 focus-visible:bg-purple400 transition-colors",
};

export const PillBtn = ({ children, onClick, color, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full px-6 py-4 font-bold ${pillBtnTheme[color]}`}
    >
      {children}
    </button>
  );
};
