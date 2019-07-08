    </section>
    <footer id="footer" class="footer">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<div class="footer__block">
    					<div class="footer__address">
    						<img src="<?php bloginfo('template_url') ?>/img/geo.png" alt="">
    						<div>
    							Москва, ул. Маршала Прошлякова, 19
    						</div>
    					</div>
    					<div class="footer__phone">
    						<a href="tel:+79257721355">+7 925 772 - 13 - 55</a>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </footer>
    <div class="callback__modal">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="callback__box">
              <div class="callback__close">
                <img src="<?php bloginfo('template_url') ?>/img/close.svg" alt="" width="25px">
              </div>
              <div class="callback__title">
                Заказать
              </div>
              <div class="callback__line"></div>
              <div class="callback__form">
                <?php echo do_shortcode('[contact-form-7 id="28" title="Заказать"]') ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal__bg"></div>
    <?php wp_footer(); ?>
</body>
</html>