
const NoticesControls = ({url, clickHandler, changeSize, size, zIndex, changeZIndex}) => {

	return(<div className={'gutenberg-draggable-images__example-controls'}>
				<img className={'gutenberg-draggable-images__example-controls_img'} src={url} />
				<div className={'gutenberg-draggable-images__example-controls_inputs'}>
					<span className={'gutenberg-draggable-images__example-controls_inputs_btn-del'} onClick={()=>{clickHandler()}}>	&times; </span>
					<div className={'gutenberg-draggable-images__input-group'}>
						<span>Image size (px)</span>
						<input className={'gutenberg-draggable-images__example-controls_inputs_inp-size'} type="number" value={size} onChange={(e)=>{changeSize(e)}} />
					</div>
					<div className={'gutenberg-draggable-images__input-group'}>
						<span>Image z-index</span>
						<input className={'gutenberg-draggable-images__example-controls_inputs_z-index'} type="number" value={zIndex} onChange={(e)=>{changeZIndex(e)}} />
					</div>

				</div>
			</div>)
}

export {NoticesControls};
