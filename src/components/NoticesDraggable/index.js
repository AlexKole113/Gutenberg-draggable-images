import Draggable from 'react-draggable'; // The default


const NoticesDraggable = ({url , coordX, coordY , dragStart, dragStop, size }) => {

	const style = {
		width: `${size}px`
	}


	return( <Draggable
			onStart={dragStart}
			onDrag={dragStop}

			>
			 <img style={style} className={'gutenberg-draggable-images__draggable_img'} src={url} />
			</Draggable>
	)
}

export {NoticesDraggable};
