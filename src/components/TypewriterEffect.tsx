'use client'
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

type TypewriterEffectProps = {
  className?: ClassNameValue,
  speed?: number,
  delay?: number,
  showAfterText?: ReactNode
}

const TypewriterEffect: React.FC<React.PropsWithChildren<TypewriterEffectProps>> = (
  {className = '', children, speed = 20, delay = 0, showAfterText}
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isShowBreakLine, setShowBreakLine] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef?.current) return;

    let index = 0;
    const typeWriter = () => {
      if (typeof children === 'string' && index < children?.length) {
        //@ts-ignore
        containerRef.current.innerHTML += children.charAt(index);
        index++;
        const timedId = setTimeout(() => {
          clearTimeout(timedId);
          typeWriter();
        }, speed);
      }
    }

    const timerId = setTimeout(() => {
      clearTimeout(timerId);
      typeWriter();
    }, delay);

    if (showAfterText) {
      const timerId = setTimeout(() => {
        setShowBreakLine(true);
        clearTimeout(timerId);
      }, delay)
    }
  }, []);

  return (
    <>
      <div className={twMerge("relative z-[100] text-base text-white", className || '')} ref={containerRef}/>
      {isShowBreakLine && showAfterText}
    </>
  );
}

export default TypewriterEffect;