import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import edit from './edit';
import save from './save';

registerBlockType( 'create-block/gutenberg-draggable-images', {

	apiVersion: 2,

	// coords, size image, block size
	attributes: {
		notices: {
			type: 'array',
			source: 'query',
			selector: '.gutenberg-draggable-images__notices_draggable_img',
			query: {
				url: {
					type: 'string',
					source: 'attribute',
					attribute: 'src',
				},
				size: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-size',
					default: '80'
				},
				zIndex: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-z-index',
					default: '1'
				},
				coordX: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-x',
				},
				coordY: {
					type: 'string',
					source: 'attribute',
					attribute: 'data-y',
				},
			},
			default: []
		},
		backgroundColor: {
			type: 'string',
			source: 'attribute',
			selector: '.gutenberg-draggable-images__container',
			attribute: 'data-background',
		},
		containerHeight: {
			type: 'string',
			source: 'attribute',
			selector: '.gutenberg-draggable-images__container',
			attribute: 'data-height',
		},
		containerWidth: {
			type: 'string',
			source: 'attribute',
			selector: '.gutenberg-draggable-images__container',
			attribute: 'data-width',
		}
	},

	edit,
	save,
} );
