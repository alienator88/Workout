(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

   
function calcBMI () {
	// (A) Get elements
	let bmi = null,
		weight = parseInt(document.getElementById("bmi-weight").value),
		height_ft = parseInt(document.getElementById("bmi-height-ft").value),
		height_in = parseInt(document.getElementById("bmi-height-in").value),
		results = document.getElementById("bmi-results");

		// Imperial Formula
		height = (height_ft * 12) + height_in
	  bmi = 703 * (weight / (height * height));

	bmi = Math.round(bmi * 10) / 10; // Round off 1 decimal place
   
	// (C) Show Results
	if (bmi < 18.5) {
	  results.innerHTML = bmi + " - Underweight";
	} else if (bmi < 25) {
	  results.innerHTML = bmi + " - Normal weight";
	} else if (bmi < 30) {
	  results.innerHTML = bmi + " - Pre-obesity";
	} else if (bmi < 35) {
	  results.innerHTML = bmi + " - Obesity class I";
	} else if (bmi < 40) {
	  results.innerHTML = bmi + " - Obesity class II";
	} else {
	  results.innerHTML = bmi + " - Obesity class III";
	}
	return false;
  }
