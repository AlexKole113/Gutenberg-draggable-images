import { useBlockProps } from '@wordpress/block-editor';
import { DraggableScreen } from "./components/DraggableScreen";
import { NoticesSave } from "./components/NoticesSave";
import { unitMap } from "./utils/unitMap";

export default function save({ attributes }) {

	const { notices, backgroundColor, containerHeight, containerWidth } = attributes

	return (
		<section { ...useBlockProps.save() } >
			<div style={{ height: unitMap( containerHeight, 'containerHeight' ), width: unitMap( containerWidth, 'containerWidth' ) , backgroundColor}}
				 className="gutenberg-draggable-images__container"
				 data-background={backgroundColor}
				 data-height={containerHeight}
				 data-width={containerWidth}
			>
				<DraggableScreen>
					{ notices.map( ( item, i ) => <NoticesSave key={i} size={item.size} url={item.url} coordX={item.coordX} coordY={item.coordY} zIndex={item.zIndex} /> ) }
				</DraggableScreen>
			</div>
		</section>
	);
}
