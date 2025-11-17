interface IProps {
  isOpen?: boolean;
  children: any;
  className?: string;
  openClassName?: string;
  closeClassName?: string;
}

const Drawer = (props: IProps) => {
  const { isOpen, className, children, openClassName, closeClassName } = props;

  return (
    <div
      className={`fixed max-h-screen h-screen w-screen z-50 flex flex-col p-12 top-0 ${
        className || ""
      } ${
        isOpen
          ? `duration-300 delay-150 ease-out left-0 transition-all ${
              openClassName || ""
            }`
          : `duration-300 delay-150 -left-[100vw] transition-all ease-in ${
              closeClassName || ""
            }`
      }`}
    >
      {children}
    </div>
  );
};

export default Drawer;
