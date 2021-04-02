import {unitMap} from "../../utils/unitMap";

const NoticesDraggable = ({url , coordX, coordY, size, zIndex, numberItem }) => {

	const style = {
		width: unitMap( size, 'imageWidth' ),
		top: unitMap( coordY,'coordY' ),
		left: unitMap(coordX, 'coordX'),
		zIndex
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
