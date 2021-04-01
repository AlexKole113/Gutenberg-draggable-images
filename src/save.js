/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { DraggableScreen } from "./components/DraggableScreen";
import { NoticesSave } from "./components/NoticesSave";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {

	const { notices, backgroundColor, blockSize } = attributes

	return (
		<section { ...useBlockProps.save() } style={{height:`${blockSize}px`,backgroundColor}} >
			<div className="container gutenberg-draggable-images__container" data-background={backgroundColor} data-size={blockSize}>
				<DraggableScreen>
					{ notices.map( ( item, i ) => <NoticesSave key={i} size={item.size} url={item.url} coordX={item.coordX} coordY={item.coordY} zIndex={item.zIndex} /> ) }
				</DraggableScreen>
			</div>
		</section>
	);
}
