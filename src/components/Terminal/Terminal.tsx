'use client'
import Input from '@/components/Input';
import { useTerminal } from '@/components/Terminal/hooks/useTerminal';
import WalletConnectPopup from '@/components/Popup/WalletConnectPopup';
import VideoPopup from '@/components/Popup/VideoPopup';
import WalletConnect from '@/components/WalletConnect';

const Terminal: React.FC = () => {
  const {
    enteredCommands,
    onEnterClick,
    isShowSelectWalletPopup,
    onCloseSelectWalletPopup,
    openSelectWalletPopup,
    isShowVideoPopup,
    onCloseVideoPopup
  } = useTerminal();

  return (
    <div className="pb-[100px]">
      <div className="relative z-[100]">
        {enteredCommands.map((command, index) => (
          <div className="mt-[10px]" key={index}>
            <div
              className="inline-flex items-center gap-[10px] mb-[10px] text-base text-white"
            >
              <div className="opacity-[.5]">$</div>
              <div>{command.name}</div>
            </div>
            {command.messages}
          </div>
        ))}
      </div>
      <Input onEnterClick={onEnterClick}/>
      <WalletConnect
        isSelectWalletOpen={isShowSelectWalletPopup}
        onSelectWalletClose={onCloseSelectWalletPopup}
        openSelectWallet={openSelectWalletPopup}
      />
      {isShowVideoPopup && (
        <VideoPopup
          isOpen={isShowVideoPopup}
          onClose={onCloseVideoPopup}
        />
      )}
    </div>
  );
}

export default Terminal;