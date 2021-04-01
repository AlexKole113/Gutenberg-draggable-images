
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

import {NoticesControls} from "./components/NoticesControls";
import {NoticesDraggable} from "./components/NoticesDraggable";
import {DraggableScreen} from "./components/DraggableScreen";


const { MediaUpload, InspectorControls } = wp.blockEditor;
const {
	Fragment
} = wp.element;





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
		setAttributes({
			notices: [...notices]
		})
	}

	const deleteSingleNotice = (i) => {
		setAttributes({
			notices: [...notices.filter( (item,j) => j !== i )]
		})
	}

	const changeSize = (e,i) => {
		console.log(e.target.value, i)
		notices[i]['size'] = e.target.value
		setAttributes({
			notices: [...notices]
		})
	}

	const dragStart = (e) => {
		console.log(e)
	}

	const eventLogger = (e, data) => {
		console.log('Event: ', e);
		console.log('Data: ', data);
	};

	const noticesCollectionWithControls  = notices.map((item, i) => <NoticesControls key={i} url={item.url} clickHandler={ ()=>{deleteSingleNotice(i)} } changeSize={(e)=>{changeSize(e,i)}} size={item.size} />)
	const noticesCollectionWithDraggable = notices.map((item, i) => <NoticesDraggable key={i} coordX={item.coordX} coordY={item.coordY} url={item.url} dragStart={dragStart} size={item.size} /> )

	const blockGutenProps = useBlockProps();

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
								{ noticesCollectionWithControls }
							</div>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			) }

			<section { ...blockGutenProps }>
				<DraggableScreen>
					{ noticesCollectionWithDraggable }
				</DraggableScreen>
			</section>
		</Fragment>
	);
}
