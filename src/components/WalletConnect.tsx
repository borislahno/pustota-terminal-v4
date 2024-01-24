'use client'
import WalletConnectPopup from '@/components/Popup/WalletConnectPopup';
import SelectWalletPopup from '@/components/Popup/SelectWalletPopup';
import { useState } from 'react';
import WalletButton from '@/components/WalletButton';

type WalletConnectProps = {
  isSelectWalletOpen: boolean,
  onSelectWalletClose: () => void,
  openSelectWallet: () => void,
}

const WalletConnect: React.FC<WalletConnectProps> = ({isSelectWalletOpen, openSelectWallet, onSelectWalletClose}) => {
  const [isShowWalletConnectPopup, setShowWalletConnect] = useState<boolean>(false);

  return (
    <>
      {isSelectWalletOpen && (
        <SelectWalletPopup
          onClose={onSelectWalletClose}
          isOpen={isSelectWalletOpen}
        >
          <WalletButton onClick={() => {
            setShowWalletConnect(true);
            onSelectWalletClose();
          }}>
            <div className="flex items-center gap-[8px]">
              <img src="/images/wallet-connect.webp" alt="WallectConnect wallet" width={40} height={40}/>
              WalletConnect
            </div>
            <div
              className="flex items-center justify-center w-[62px] h-[23px] ml-auto rounded-[5px] bg-blue-100/[.15]
                         text-2xs font-medium text-blue-100"
            >
              QR CODE
            </div>
          </WalletButton>
          <WalletButton>
            <img src="/images/meta-mask.webp" alt="Meta mask wallet" width={40} height={40}/>
            MetaMask
          </WalletButton>
          <WalletButton>
            <img src="/images/browser-wallet.webp" alt="Browser wallet" width={40} height={40}/>
            Browser Wallet
          </WalletButton>
          <WalletButton>
            <img className="rounded-[8px]" src="/images/trus-wallet.webp" alt="Trust wallet" width={40} height={40}/>
            Trust Wallet
          </WalletButton>
          <WalletButton>
            <img src="/images/coinbase-wallet.webp" alt="Coinbase wallet" width={40} height={40}/>
            Coinbase
          </WalletButton>
        </SelectWalletPopup>
      )}

      {isShowWalletConnectPopup && (
        <WalletConnectPopup
          onClose={() => setShowWalletConnect(false)}
          isOpen={isShowWalletConnectPopup}
          onBack={() => {
            setShowWalletConnect(false);
            openSelectWallet();
          }}
        />
      )}
    </>
  );
}

export default WalletConnect;