$(document).ready(function(){
	// $("#infoModal").modal("show");
	
	
	$(".modalBtn").click(function(){
		$("#infoModal").modal("hide");
	});

	$("#infoForm").submit(function(){
		var form = $(this).serialize();
		//some code
		return false;

	})

	$('#password').keypress(function (e) {
		var duration = 100;
		
		if (e.which == 13) {
			$(".progress").replaceWith("<div class='progress'> \
				<div class='progress-bar progress-bar-danger' role='progressbar' style='width: 0;'> \
				<span class='sr-only'></span> \
				</div> \
				</div>");
			var stringGuesser = setInterval(function() {
				$("#randomString").html(generateString());
			}, 10);
			
			
			$('.progress-bar').countTo({
				from: 0,
				to: $("#progress").width(),
				speed: duration,
				refreshInterval: 50,
				onComplete: function(value) {
					setTimeout(function() {
						clearInterval(stringGuesser);
						$("#randomString").html($("#password").val());

					}, 500);
				}
			});



			
		}
	});
});


//returns a string of random length from 5 to 10
function generateString()
{
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < 5 + Math.floor(Math.random()*6); i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

//fires out values from, to
(function($) {
	$.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

        return $(this).each(function() {
        	var _this = this,
        	loopCount = 0,
        	value = options.from,
        	interval = setInterval(updateTimer, options.refreshInterval);

        	function updateTimer() {
        		value += increment;
        		loopCount++;
        		$(_this).css("width", value.toFixed(options.decimals));

        		if (typeof(options.onUpdate) == 'function') {
        			options.onUpdate.call(_this, value);
        		}

        		if (loopCount >= loops) {
        			clearInterval(interval);
        			value = options.to;

        			if (typeof(options.onComplete) == 'function') {
        				options.onComplete.call(_this, value);
        			}
        		}
        	}
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);