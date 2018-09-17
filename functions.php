<?php

add_action('generate_rewrite_rules', 'themes_dir_add_rewrites');
 
function themes_dir_add_rewrites() {
  $theme_name = next(explode('/themes/', get_stylesheet_directory()));
 
  global $wp_rewrite;
  $new_non_wp_rules = array(
  	'static/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/static/$1',
    'build/(.*)'       => 'wp-content/themes/'. $theme_name . '/build/$1',
    'src/(.*)'        => 'wp-content/themes/'. $theme_name . '/src/$1',
    'public/(.*)'        => 'wp-content/themes/'. $theme_name . '/src/$1'
  );
  $wp_rewrite->non_wp_rules += $new_non_wp_rules;
}