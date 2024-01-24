type WalletButtonProps = {
  onClick?: () => void,
}

const WalletButton: React.FC<React.PropsWithChildren<WalletButtonProps>> = ({children, onClick}) => {

  return (
    <button
      className="flex items-center gap-[12px] w-full h-[58px] px-[9px] rounded-[12px] bg-white/[.03] text-xs font-Poppins font-normal text-white
                 hover:bg-white/[.1]"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default WalletButton;