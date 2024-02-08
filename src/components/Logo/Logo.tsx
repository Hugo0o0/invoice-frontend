import { Logo as LogoIcon } from "../UI";

const Logo = () => {
  return (
    <div className="md:w-full md:h-[10.3rem] h-full w-[8rem] relative flex items-center justify-center bg-primary rounded-tr-[20px] rounded-br-[20px] z-10 after:w-full after:h-1/2 after:bg-secondary after:bottom-0 after:absolute after:-z-10 after:rounded-tl-[20px] after:rounded-br-[20px]">
      <LogoIcon />
    </div>
  );
};

export default Logo;
