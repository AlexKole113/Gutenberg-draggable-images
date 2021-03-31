/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/gutenberg-draggable-images', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * @see ./edit.js
	 */


	attributes: {
		imgUrl: {
			type: 'string',
			selector: '.gutenberg-draggable-images__main',
			attribute: 'src',
			default: '../assets/default-image.jpeg'
		},
		notices: {
			type: 'array',
			source: 'query',
			selector: '.gutenberg-draggable-images__notices img',
			query: {
				url: {
					type: 'string',
					source: 'attribute',
					attribute: 'src',
				},
			},
			default: []
		},
	},



	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
