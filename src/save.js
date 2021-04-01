import { useBlockProps } from '@wordpress/block-editor';
import { DraggableScreen } from "./components/DraggableScreen";
import { NoticesSave } from "./components/NoticesSave";
import { unitMap } from "./utils/unitMap";

export default function save({ attributes }) {

	const { notices, backgroundColor, blockSize } = attributes

	return (
		<section { ...useBlockProps.save() } style={{height: unitMap( blockSize, 'blockHeight' ), backgroundColor}} >
			<div className="container gutenberg-draggable-images__container" data-background={backgroundColor} data-size={blockSize}>
				<DraggableScreen>
					{ notices.map( ( item, i ) => <NoticesSave key={i} size={item.size} url={item.url} coordX={item.coordX} coordY={item.coordY} zIndex={item.zIndex} /> ) }
				</DraggableScreen>
			</div>
		</section>
	);
}
