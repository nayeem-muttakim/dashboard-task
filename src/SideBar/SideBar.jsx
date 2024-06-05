const SideBar = () => {
  return (
    <aside className="bg-[#171829] h-screen w-1/6">
      <span className="text-4xl  text-white font-bold px-6 py-9 border-b-2 border-[#202131] flex justify-between items-center">
        Tivo{" "}
        <button>
          <img
            className="p-3 rounded-lg bg-[#2F303F] active:bg-black"
            src="/menu.png"
            alt="menu-icon"
          />
        </button>
      </span>
    </aside>
  );
};

export default SideBar;
