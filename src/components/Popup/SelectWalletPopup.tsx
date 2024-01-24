import PopupOverlay from '@/components/Popup/PopupOverlay';
import Cross from '../../../public/svg/cross.svg';

type SelectWalletPopupProps = {
  onClose: () => void,
  isOpen: boolean,
}

const SelectWalletPopup: React.FC<React.PropsWithChildren<SelectWalletPopupProps>> = ({onClose, isOpen, children}) => {


  return (
    <PopupOverlay isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center w-[364px] pb-[30px] rounded-[34px] border-[1px] border-white/[.05] bg-black-200 font-Poppins">
        <div className="flex justify-between px-[20px] py-[21px] mb-[16px] text-sm font-medium text-white border-b-[1px] border-b-white/[.05]">
          <div/>
          Connect Wallet
          <button type="button" onClick={onClose}>
            <Cross/>
          </button>
        </div>
        <div className="flex flex-col gap-[8px] px-[24px]">
          {children}
        </div>
      </div>
    </PopupOverlay>
  );
}

export default SelectWalletPopup;