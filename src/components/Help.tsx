import { useEffect, useRef, useState } from 'react';
import HelpIcon from '../../public/svg/help.svg';
import CrossIcon from '../../public/svg/cross.svg';
import { COMMANDS_INFO } from '@/constants/terminalCommand';

const Help: React.FC = () => {
  const [isHelpShowing, setShowHelp] = useState<boolean>(false);
  const helpButtonRef = useRef<HTMLButtonElement | null>(null);
  const helpContainerRef = useRef<HTMLDivElement | null>(null);

  const onHelpClick = () => setShowHelp(true);

  const onCloseClick = () => setShowHelp(false);

  useEffect(() => {
    if (!helpButtonRef.current || !helpContainerRef.current) return;
    const onClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement || event.target instanceof SVGElement) {
        if (
          event.target !== helpContainerRef.current &&
          !helpContainerRef.current?.contains(event.target)
        ) {
          setShowHelp(false);
        }
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      console.log(event.code);
      if (event.code === 'Escape') {
        setShowHelp(false);
      }
    }

    document.body.addEventListener('click', onClickOutside, true);
    document.body.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.body.removeEventListener('click', onClickOutside, true);
      document.body.removeEventListener('keydown', onKeyDown, true);
    }
  }, [helpButtonRef.current, helpContainerRef.current])

  return (
    <div className="fixed z-[100] bottom-[32px] right-[32px] flex flex-col gap-[14px]">
      {isHelpShowing && (
        <div
          className="relative w-[319px] px-[16px] py-[14px] border-[1px] border-white rounded-[10px] bg-black-400 text-xl text-white"
          ref={helpContainerRef}
        >
          <button className="absolute top-[8px] right-[8px]" type="button" onClick={onCloseClick}>
            <CrossIcon/>
          </button>
          <div className="mb-[8px]">Commands:</div>
          <ul className="flex flex-col gap-[4px] text-xs">
            {COMMANDS_INFO.map(({info, name}) => (
              <li className="flex items-center gap-[8px]" key={name}>
                <div className="w-[4px] h-[4px] rounded-full bg-white"/>
                <div>{name} - {info}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="self-end"
        onClick={onHelpClick}
        type="button"
        ref={helpButtonRef}
      >
        <HelpIcon/>
      </button>
    </div>
  );
}

export default Help