import PopupOverlay from '@/components/Popup/PopupOverlay';
import Arrow from '../../../public/svg/left-arrow.svg';
import Cross from '../../../public/svg/cross.svg';
import Copy from '../../../public/svg/copy.svg';

type WalletConnectPopupProps = {
  onClose: () => void,
  isOpen: boolean,
  onBack: () => void,
}

const WalletConnectPopup: React.FC<WalletConnectPopupProps> = ({onClose, isOpen,onBack}) => {

  // TODO:Add text to copy
  const onCopyClick = () => navigator.clipboard.writeText('');

  return (
    <PopupOverlay isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center w-[364px] pb-[30px] rounded-[34px] border-[1px] border-white/[.05] bg-black-200 font-Poppins">
        <div className="flex justify-between px-[20px] py-[21px] mb-[23px] text-sm font-medium text-white border-b-[1px] border-b-white/[.05]">
          <button type="button" onClick={onBack}>
            <Arrow/>
          </button>
          WalletConnect
          <button type="button" onClick={onClose}>
            <Cross/>
          </button>
        </div>
        <div className="mb-[16px] px-[25px]">
          <img src="/images/qr-code.webp" alt="Wallet QR code"/>
        </div>
        <div className="mb-[22px] mx-auto text-xs text-white">
          Scan this QR Code with your phone
        </div>
        <button
          className="flex items-center gap-[4px] w-[92px] mx-auto text-xs font-medium text-white text-opacity-50 hover:text-opacity-70"
          type="button"
          onClick={onCopyClick}
        >
          <Copy/>
          Copy link
        </button>
      </div>
    </PopupOverlay>
  );
}

export default WalletConnectPopup;