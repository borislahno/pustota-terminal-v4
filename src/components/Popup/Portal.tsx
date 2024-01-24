import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

type PortalProps = {
  destination?: HTMLElement | null,
}

const Portal: React.FC<React.PropsWithChildren<PortalProps>> = ({children, destination}) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    if (!destination) {
      document.body.appendChild(container);
    }
    return () => {
      if (!destination) {
        document.body.removeChild(container);
      }
    }
  }, [])

  if (destination) {
    return ReactDOM.createPortal(children, destination);
  }

  return ReactDOM.createPortal(children, container);
}

export default Portal;