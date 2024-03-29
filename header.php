<!doctype html>
<html <?php language_attributes(); ?> class="no-js no-svg">

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <base href="/">
  <link rel="alternate" hreflang="x-default" href="<?php echo home_url(); ?>">
  <link rel="alternate" hreflang="en" href="<?php echo home_url(); ?>/en">
  <link rel="alternate" hreflang="ru" href="<?php echo home_url(); ?>/ru">
  <link rel="alternate" hreflang="ua" href="<?php echo home_url(); ?>/ua">

  <?php
  // ENQUEUE your css and js in inc/enqueues.php

    wp_head();
	?>
</head>
<body <?php echo body_class(); ?>>
  <!-- <div class="preloader"></div> -->
  
  <header id="header" class="header" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="header__content">
            <div class="header__left">
              <div class="header__logo">
                <img src="<?php bloginfo('template_url') ?>/img/logo.png" alt="">
              </div>
              <div class="header__menu">
                <li><a href="#reasons">Преимуществa</a></li>
                <li><a href="#dop">Дополнительная комплектация</a></li>
              </div>
            </div>
            <div class="header__right">
              <a href="http://carbonart.ru/">CarbonArt.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section id="content" role="main">