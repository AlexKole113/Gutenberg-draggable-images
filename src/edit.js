
const { MediaUpload, InspectorControls } = wp.blockEditor;
const {
	Fragment
} = wp.element;

import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';


import './editor.scss';

export default function Edit( props ) {
	const { imgUrl, notices } = props.attributes;
	const { className, setAttributes, isSelected } = props;

	const selectImage = (value) => {
		setAttributes({
			imgUrl: value.sizes.full.url,
		})
	}

	const addNotices = ( value ) => {
		notices.push({ url : value.sizes.full.url })
		const updatedNotices = notices.slice(0)
		setAttributes({
			notices: updatedNotices
		})
	}


	const deleteSingleNotice = (i) => {
		setAttributes({
			notices: notices.filter( (item,j) => j !== i ).slice(0)
		})

	}



	const blockGutenProps = useBlockProps();


	const noticesCollectionWithButtons = notices.map((item, i) => <div key={i} className={'gutenberg-draggable-images__notice-example'}><img src={item.url} /><span onClick={()=>{deleteSingleNotice(i)}}>delete image</span></div> )
	const noticesCollection = notices.map((item, i) => <img key={i} src={item.url} /> )
	return (
		<Fragment>
			{ isSelected && (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<MediaUpload
								onSelect={ (v)=>{ addNotices(v) }}
								render={ ({open}) => {
									return  <span onClick={open} style={{cursor:'pointer'}}>add image</span>;
								}}
							/>
						</PanelRow>
						<PanelRow>
							<div style={{display:'flex', flexFlow:'column'}}>
								{ noticesCollectionWithButtons }
							</div>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			) }

			<section { ...blockGutenProps }>
				<div>
					<MediaUpload
						onSelect={ (v)=>{ selectImage(v) }}
						render={ ( {open} ) => {
							if( imgUrl ){
								return <img src={imgUrl} onClick={open} />;
							}
							return <img onClick={open} className={'gutenberg-draggable-images__main'} src={imgUrl} />;
						}}
					/>
				</div>
				<div className={'gutenberg-draggable-images__notices'} >
					{ noticesCollection }
				</div>
			</section>
		</Fragment>
	);
}
