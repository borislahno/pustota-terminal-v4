import PopupOverlay from '@/components/Popup/PopupOverlay';
import Cross from '../../../public/svg/cross.svg';

type VideoPopupProps = {
  isOpen: boolean,
  onClose: () => void,
}

const VideoPopup: React.FC<VideoPopupProps> = ({isOpen, onClose}) => {

  return (
    <PopupOverlay isOpen={isOpen} onClose={onClose}>
      <>
        <div className="relative max-w-[1118px] w-full">
          <button className="absolute z-[10000] top-[-36px] right-[0]" type="button" onClick={onClose}>
            <Cross/>
          </button>
          <iframe
            className="aspect-video"
            // TODO:Video link
            src="https://www.youtube.com/embed/Im6wqgSjV74?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </>
    </PopupOverlay>
  );
}

export default VideoPopup;