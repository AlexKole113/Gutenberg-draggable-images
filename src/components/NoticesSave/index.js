import {unitMap} from "../../utils/unitMap";

const NoticesSave = ({url , coordX, coordY, size, zIndex }) => {

	const style = {
		width: unitMap( size, 'imageWidth' ),
		top: unitMap( coordY,'coords' ),
		left: unitMap(coordX, 'coords'),
		zIndex
	}

	return( <img style={style}
				 className={'gutenberg-draggable-images__notices_draggable_img'}
				 src={url}
				 data-size={size}
				 data-x={coordX}
				 data-y={coordY}
				 data-z-index={zIndex}
			/> )
}

export {NoticesSave};
