import {AnimationSelect} from "../AnimationSelect";


const NoticesControls = ( { url, clickHandler, changeSize, size, zIndex, mimeType, changeZIndex, animation, changeAnimation } ) => {

	let media;

	if ( mimeType === 'video' ) {
		media = (
			<video
				src={ url }
				className={ 'gutenberg-draggable-images__example-controls_img' }
				autoPlay muted loop>
				Sorry, your browser doesn't support embedded videos.
			</video>
		)
	} else {
		media = ( <img src={ url } className={'gutenberg-draggable-images__example-controls_img'} /> );
	}



	return(<div className={'gutenberg-draggable-images__example-controls'}>
				{ media }
				<div className={'gutenberg-draggable-images__example-controls_inputs'}>
					<span className={'gutenberg-draggable-images__example-controls_inputs_btn-del'} onClick={()=>{clickHandler()}}>	&times; </span>
					<div className={'gutenberg-draggable-images__input-group'}>
						<label>
							<span>Image size (px)</span>
							<input className={'gutenberg-draggable-images__example-controls_inputs_inp-size'} type="number" value={size ?? 100} onChange={(e)=>{changeSize(e)}} />
						</label>
					</div>
					<div className={'gutenberg-draggable-images__input-group'}>
						<label>
							<span>Image z-index</span>
							<input className={'gutenberg-draggable-images__example-controls_inputs_z-index'} type="number" value={zIndex} onChange={(e)=>{changeZIndex(e)}} />
						</label>
					</div>
					<div className={'gutenberg-draggable-images__input-group'}>
						<label>
							<span>Enable Animation</span>
							<AnimationSelect selectedAnimation={animation} setAnimation={changeAnimation}  />
						</label>
					</div>
				</div>
			</div>)
}

export {NoticesControls};
