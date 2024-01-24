import { ReactNode, useState } from 'react';
import { COMMAND_ENUM, COMMANDS } from '@/constants/terminalCommand';
import TypewriterEffect from '@/components/TypewriterEffect';

type UseTerminal = () => {
  enteredCommands: EnteredCommand[],
  onEnterClick: (command: string) => void,
  isShowSelectWalletPopup: boolean,
  onCloseSelectWalletPopup: () => void,
  isShowVideoPopup: boolean,
  onCloseVideoPopup: () => void,
  openSelectWalletPopup: () => void,
}

type EnteredCommand = {
  name: string,
  messages: ReactNode,
}

export const useTerminal: UseTerminal = () => {
  const [enteredCommands, setEnteredCommands] = useState<EnteredCommand[]>([]);
  const [isShowSelectWalletPopup, setShowSelectWalletPopup] = useState<boolean>(false);
  const [isShowVideoPopup, setShowVideoPopup] = useState<boolean>(false);

  const isCommandExist = (command: string): boolean =>
    Object.keys(COMMANDS).some(terminalCommand => terminalCommand.toLowerCase() === command.toLowerCase());

  const executeCommand = (command: string) => {
    switch (command) {
      case 'connect':
        return setShowSelectWalletPopup(true);
      case 'info':
        return setShowVideoPopup(true);
      default:
        return;
    }
  }

  const onEnterClick = (command: string) => {
    if (isCommandExist(command)) {
      setEnteredCommands(prevState => [
        ...prevState,
        {
          name: command,
          messages: <>
            {COMMANDS[command.toLowerCase() as COMMAND_ENUM].messages.map((message, index, arr) => (
              <TypewriterEffect
                key={index}
                delay={index === 0 ? 0 : (arr.slice(0, index).reduce((res, text) => res + text.length, 0) - index + 1) * 20}
                speed={20}
              >
                {message}
              </TypewriterEffect>
            ))}
          </>
        }
      ]);
      executeCommand(command);
      return
    }
    setEnteredCommands(prevState => [
      ...prevState,
      {
        name: command,
        messages: <>
          <TypewriterEffect>Invalid Command</TypewriterEffect>
          <TypewriterEffect delay={280}>Type &quot;help&quot; to see list of commands</TypewriterEffect>
        </>
      }
    ]);
  }

  const onCloseSelectWalletPopup = () => setShowSelectWalletPopup(false);

  const onCloseVideoPopup = () => setShowVideoPopup(false);

  const openSelectWalletPopup = () => setShowSelectWalletPopup(true)

  return {
    enteredCommands,
    onEnterClick,
    isShowSelectWalletPopup,
    onCloseSelectWalletPopup,
    isShowVideoPopup,
    onCloseVideoPopup,
    openSelectWalletPopup,
  }
}