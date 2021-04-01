import Draggable from 'react-draggable';


const NoticesDraggable = ({url , coordX, coordY , dragStart, dragStop, size, zIndex }) => {

	const style = {
		width: `${size}px`,
		transform: `translate(${coordX}px, ${coordY}px)`,
		top: `${coordY}px`,
		left: `${coordX}px`,
		zIndex
	}

	return( <Draggable
			onStop={dragStop}
			>
			 	<img style={style} className={'gutenberg-draggable-images__notices_draggable_img'} src={url} />
			</Draggable>
	)
}

export {NoticesDraggable};
