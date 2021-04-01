const NoticesDraggable = ({url , coordX, coordY, size, zIndex, numberItem }) => {

	const style = {
		width: `${size}px`,
		top: `${coordY}px`,
		left: `${coordX}px`,
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
