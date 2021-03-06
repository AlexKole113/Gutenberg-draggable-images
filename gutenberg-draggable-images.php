<?php
/**
 * Plugin Name:     Gutenberg Draggable Images
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenberg-draggable-images
 *
 * @package         create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_gutenberg_draggable_images_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_gutenberg_draggable_images_block_init' );


add_action( 'wp_enqueue_scripts', function(){
	wp_enqueue_script( 'gutenberg_draggable_images_animation', plugins_url( 'src/components/AnimationSelect/animations/animations.js', __FILE__ ) );
} );

