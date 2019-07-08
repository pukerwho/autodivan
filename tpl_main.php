<?php
/*
Template Name: Main
*/
?>

<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	
	<section id="welcome" class="welcome">
		<?php get_template_part('blocks/welcome') ?>
	</section>
	<section id="reasons" class="reasons">
		<?php get_template_part('blocks/reasons') ?>
	</section>
	<section id="dop" class="dop">
		<?php get_template_part('blocks/dop') ?>
	</section>
	<section id="works" class="works">
		<?php get_template_part('blocks/works') ?>
	</section>
	
<?php endwhile; else: ?>
	<p><?php _e('Ничего не найдено'); ?></p>
<?php endif; ?>
<?php get_footer(); ?>