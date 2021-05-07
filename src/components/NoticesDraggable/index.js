import {unitMap} from "../../utils/unitMap";

const NoticesDraggable = ({url , coordX, coordY, size, zIndex, numberItem, mimeType, containerHeight, containerWidth }) => {

	const style = {
		width: unitMap( size, { unit: 'imageWidth' , containerHeight , containerWidth  } ),
		top: unitMap( coordY,{ unit: 'coordY', containerHeight, containerWidth } ),
		left: unitMap( coordX, { unit: 'coordX', containerHeight, containerWidth } ),
		zIndex
	}

	if ( mimeType === 'video' ) {
		return(
			<video
				style={style}
				src={url}
				data-item={numberItem}
				className={ 'gutenberg-draggable-images__notices_draggable_img' }
				autoPlay muted loop>
				Sorry, your browser doesn't support embedded videos.
			</video>
		)
	}

	return(
		<img
		style={style}
		src={url}
		data-item={numberItem}
		className={'gutenberg-draggable-images__notices_draggable_img'}
	/> )
}

export {NoticesDraggable};
