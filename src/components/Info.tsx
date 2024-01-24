'use client'
import InfoIcon from '../../public/svg/info.svg';
import { useState } from 'react';

const Info: React.FC = () => {
  const [isInfoShowing, setShowInfo] = useState<boolean>(false);

  const onInfoMouseEnter = () => setShowInfo(true);

  const onInfoMouseLeave = () => setShowInfo(false);

  return (
    <div className="fixed z-[200] top-[20px] right-[32px] flex flex-col gap-[8px]">
      <div
        className="self-end"
        onMouseEnter={onInfoMouseEnter}
        onMouseLeave={onInfoMouseLeave}
      >
        <InfoIcon/>
      </div>
      {isInfoShowing && (
        <div
          className="flex items-center justify-between w-[319px] h-[64px] px-[18px] border-[1px] border-white rounded-[4px] bg-black-400 text-xl text-white"
        >
          <div>
            $LFG Points Earned
          </div>
          <div>
            0
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;