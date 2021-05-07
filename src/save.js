import { useBlockProps } from '@wordpress/block-editor';
import { DraggableScreen } from "./components/DraggableScreen";
import { NoticesSave } from "./components/NoticesSave";
import { unitMap } from "./utils/unitMap";

export default function save({ attributes }) {

	const { notices, backgroundColor, containerHeight, containerWidth } = attributes;
	//const selectedAnimations = [ ...new Set ( notices.filter(({animation})=> !!animation ).map( ({animation}) => animation ) ) ];

	return (
		<section { ...useBlockProps.save() } style={{backgroundColor}} >
			<div style={
				{ height: unitMap( containerHeight, { unit:  'containerHeight' } ),
					width: unitMap( containerWidth, { unit: 'containerWidth' } ) ,
				}}
				 className="gutenberg-draggable-images__container"
				 data-background={backgroundColor}
				 data-height={containerHeight}
				 data-width={containerWidth}
			>
				<DraggableScreen>
					{ notices.map( ( item, i ) => <NoticesSave key={i}
															   size={item.size}
															   url={item.url}
															   coordX={item.coordX}
															   coordY={item.coordY}
															   containerHeight={containerHeight}
															   containerWidth={containerWidth}
															   mimeType={item.mimeType}
															   animation={item.animation}
															   zIndex={item.zIndex} /> ) }
				</DraggableScreen>
			</div>
		</section>
	);
}
