import { FC } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
}

const Avatar: FC<AvatarProps> = ({ alt, src }) => {
  const placeholder = "https://via.placeholder.com/150";
  return (
    <img
      alt={alt}
      src={src ?? placeholder}
      className="md:w-[4rem] md:h-[4rem] w-[3.2rem] h-[3.2rem] rounded-full"
    />
  );
};

export default Avatar;
