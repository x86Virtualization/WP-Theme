<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage WP-Theme
 * @since WP-Theme 1.1.6
 */

add_theme_support( 'post-thumbnails' );

add_action('generate_rewrite_rules', 'themes_dir_add_rewrites');

function themes_dir_add_rewrites() {
  $theme_name = next(explode('/themes/', get_stylesheet_directory()));

  //Ensure the $wp_rewrite global is loaded
  global $wp_rewrite;
  $new_non_wp_rules = array(
  	'static/css/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/static/css/$1',
  	'static/js/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/static/js/$1',
  	'static/media/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/static/media/$1',
    'static/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/static/$1',
    'build/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/$1',
    'src/(.*)'        => 'wp-content/themes/'. $theme_name . '/src/$1',
    'public/(.*)'        => 'wp-content/themes/'. $theme_name . '/public/$1'
  );
  $wp_rewrite->non_wp_rules += $new_non_wp_rules;

  //Call flush_rules() as a method of the $wp_rewrite object
  $wp_rewrite->flush_rules( true );
}

// Add various fields to the JSON output
function wpt_register_fields() {
    // Add Author Name
    register_rest_field( 'post',
        'authorName',
        array(
            'get_callback'      => 'wpt_get_author_name',
            'update_callback'   => null,
            'schema'            => null
        )
    );
    // Add Featured Image
    register_rest_field( 'post',
        'featuredImageSrc',
        array(
            'get_callback'      => 'wpt_get_image_src',
            'update_callback'   => null,
            'schema'            => null
        )
   );
   // Add Published Date
    register_rest_field( 'post',
       'published_date',
       array(
           'get_callback'      => 'wpt_published_date',
           'update_callback'   => null,
           'schema'            => null
       )
    );
}
add_action( 'rest_api_init', 'wpt_register_fields' );

function wpt_get_author_name( $object, $field_name, $request ) {
    return get_the_author_meta( 'display_name' );
}
function wpt_get_image_src( $object, $field_name, $request ) {
   if($object[ 'featured_media' ] == 0) {
       return $object[ 'featured_media' ];
   }
    $feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
   return $feat_img_array[0];
}
function wpt_published_date( $object, $field_name, $request ) {
    return get_the_time('F j, Y');
}