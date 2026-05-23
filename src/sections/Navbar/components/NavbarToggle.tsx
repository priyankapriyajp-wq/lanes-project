export const NavbarToggle = () => {
  return (
    <div
      aria-label="menu"
      role="button"
      className="relative text-2xl items-center box-border caret-transparent float-right h-8 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10 z-[5]"
    >
      <div className="relative items-center box-border caret-transparent flex flex-col h-8 justify-between outline-[3px] w-10 z-[3] p-1">
        <div className="self-end bg-white box-border caret-transparent h-1 min-h-[auto] min-w-[auto] outline-[3px] w-3/5 rounded-[50px]"></div>
        <div className="bg-white box-border caret-transparent h-1 min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-[50px]"></div>
        <div className="self-start bg-white box-border caret-transparent h-1 min-h-[auto] min-w-[auto] outline-[3px] w-3/5 rounded-[50px]"></div>
      </div>
    </div>
  );
};
