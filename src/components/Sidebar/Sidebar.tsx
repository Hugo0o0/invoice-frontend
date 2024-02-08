import Logo from "@/components/Logo/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Avatar from "../UI/Avatar/Avatar";

const Sidebar = () => {
  return (
    <aside className="md:w-[10.3rem] md:h-auto h-[8rem] w-full justify-between items-center flex md:flex-col bg-sidebar md:rounded-tr-[20px] md:rounded-br-[20px]">
      <Logo />
      <div className="w-full h-full md:h-auto items-center justify-end flex md:flex-col gap-10  md:justify-center">
        <ThemeSwitcher />

        <div className="md:border-t-[1px] border-l-[1px] h-full border-[#494E6E] md:border-[#494E6E] px-10 py-10 flex items-center justify-center  md:w-full">
          <Avatar alt="avatar" src="src/assets/avatar.jpg" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
