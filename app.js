(function($) {

	$(document).ready(function() {
		const views 		= ['10k', '50k', '100k', '500k', '1M'];
		const prices 		= [8, 12, 16, 24, 36];
		const slider 		= $('#slider');
		const pageviews = $('#pageviews');
		const price 		= $('#price');
		const discount 	= $('#billing');

		$(slider).on('change', function(e) {
			var currentPrice = 0;
			if( discount.is(':checked') ) {
				var newPrice = parseFloat(prices[this.value] * 3 / 4);
				currentPrice = newPrice;
			} else {
				currentPrice = prices[this.value];
			}
			price.text(currentPrice.toFixed(2));
			pageviews.text(views[this.value]);
		});

		$('.switch').on('click', function(e) {
			$(slider).trigger('change');
		});

		$(slider).trigger('change');

		$('form').on('submit', function(e) {
			e.preventDefault();
			$(this).trigger('reset');
			$(slider).trigger('change');
		});
	});
})(jQuery);