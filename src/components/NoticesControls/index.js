
const NoticesControls = ({url, clickHandler, changeSize, size}) => {

	return(<div className={'gutenberg-draggable-images__notice-example'}>
			<img className={'gutenberg-draggable-images__notice-example_img'} src={url} />
			<div className={'gutenberg-draggable-images__notice-controls'}>
				<span className={'gutenberg-draggable-images__notice-controls_btn-del'} onClick={()=>{clickHandler()}}>delete image</span>
				<input className={'gutenberg-draggable-images__notice-controls_inp-size'} type="number" value={size} onChange={(e)=>{changeSize(e)}} />
			</div>
		</div>)
}

export {NoticesControls};
