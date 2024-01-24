'use client'
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  onEnterClick: (command: string) => void,
}

const Input: React.FC<InputProps> = ({onEnterClick}) => {
  const pseudoInputRef = useRef<HTMLDivElement | null>(null);
  const [isInputFocus, setInputFocus] = useState<boolean>(true);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (pseudoInputRef.current) {
      //@ts-ignore
      pseudoInputRef.current.innerText = event.target.value;
    }
  }

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      if (pseudoInputRef.current) {
        //@ts-ignore
        pseudoInputRef.current.innerText = '';
        if (event.target instanceof HTMLInputElement) {
          onEnterClick(event.target.value);
          event.target.value = '';
        }
      }
    }
  }

  const onInputBlur = () => setInputFocus(false);

  const onInputFocus = () => setInputFocus(true);

  return (
    <div>
      <div className="absolute top-0 left-0 z-[100] w-full h-full">
        <input
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-default"
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          autoFocus
        />
      </div>
      <div
        className={twMerge(
          "relative z-[100] inline-flex items-center gap-[10px] my-[10px] text-base text-white",
          isInputFocus && "border-r-[8px] border-r-white animate-[blink-caret_1s_step-end_infinite]"
        )}>
        <div className="opacity-[.5]">$</div>
        <div ref={pseudoInputRef}/>
      </div>
    </div>
  );
}

export default Input;