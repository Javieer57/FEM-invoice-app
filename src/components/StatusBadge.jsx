const badgeThemes = {
  paid: {
    bgColor: "bg-green400/[.13]",
    dotColor: "bg-green400",
    textColor: "text-green400",
  },
  pending: {
    bgColor: "bg-orange100",
    dotColor: "bg-orange400",
    textColor: "text-orange400",
  },
  draft: {
    bgColor: "bg-gray100",
    dotColor: "bg-darkblue500",
    textColor: "text-darkblue500",
  },
};

export const StatusBadge = ({ status }) => {
  const { bgColor, textColor, dotColor } = badgeThemes[status];

  return (
    <p
      className={`${bgColor} ${textColor} inline-flex w-full min-w-[6.5rem] items-center justify-center gap-2 rounded-md p-3 font-bold capitalize`}
    >
      <span
        className={`${dotColor} block h-2 w-2 shrink-0 rounded-full`}
      ></span>
      {status}
    </p>
  );
};
