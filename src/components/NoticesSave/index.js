import { unitMap } from "../../utils/unitMap";

const NoticesSave = ({url , coordX, coordY, size, zIndex, containerHeight , containerWidth, mimeType, animation }) => {

	const style = {
		width: unitMap( size, { unit: 'imageWidth', containerHeight , containerWidth } ),
		top: unitMap( coordY,{ unit: 'coordY', containerHeight , containerWidth } ),
		left: unitMap( coordX, { unit: 'coordX', containerHeight , containerWidth} ),
		zIndex
	}


	if ( mimeType === 'video' ) {
		return(
			<video
				style={style}
				className={ `gutenberg-draggable-images__notices_draggable_img ${animation}-animation` }
				src={url}
				data-size={size}
				data-x={coordX}
				data-y={coordY}
				data-z-index={zIndex}
				data-mime={mimeType}
				data-animation={animation}
				autoPlay muted loop>
				Sorry, your browser doesn't support embedded videos.
			</video>
		)
	}

	return( <img style={style}
				 className={ `gutenberg-draggable-images__notices_draggable_img ${animation}-animation` }
				 src={url}
				 data-size={size}
				 data-x={coordX}
				 data-y={coordY}
				 data-z-index={zIndex}
				 data-mime={mimeType}
				 data-animation={animation}
			/> )
}

export {NoticesSave};
