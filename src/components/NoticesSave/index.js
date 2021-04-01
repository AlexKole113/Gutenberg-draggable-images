
const NoticesSave = ({url , coordX, coordY, size,zIndex }) => {

	const style = {
		width: `${size}px`,
		transform: `translate(${coordX}px, ${coordY}px)`,
		zIndex
	}


	return( <img style={style}
				 className={'gutenberg-draggable-images__draggable_img'}
				 src={url}
				 data-size={size}
				 data-x={coordX}
				 data-y={coordY}
				 data-z-index={zIndex}
			/> )
}

export {NoticesSave};
