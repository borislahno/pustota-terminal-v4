'use client'
import { useEffect } from 'react';
import Portal from '@/components/Popup/Portal';

type PopupOverlayProps = {
  isOpen: boolean,
  onClose: () => void,
}

const PopupOverlay: React.FC<React.PropsWithChildren<PopupOverlayProps>> = ({isOpen, onClose, children}) => {

  useEffect(() => {
    document.body.classList.add('lock');
    return () => document.body.classList.remove('lock');
  }, [])

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex justify-center items-center p-[25px]"
        onClick={event => event.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-black bg-opacity-30 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </Portal>
  );
}


export default PopupOverlay;