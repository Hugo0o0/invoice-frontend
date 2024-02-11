import classNames from "classnames";
import React, { FC } from "react";

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ModalContent: FC<ModalContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = classNames(
    "bg-item rounded-[8px] relative min-h-[10rem] min-w-[10rem] py-10 px-10",
    className
  );
  return (
    <div onClick={(e) => e.stopPropagation()} className={classes} {...props}>
      {children}
    </div>
  );
};

export default ModalContent;
