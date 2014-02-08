$(document).ready(function(){
	var firstname="";
	var year="";
	var lastname="";
	var hobby="";

	
	// $("#bubble-1" ).html("fuck you").css('visibility','visible').hide().fadeIn("slow");
	$("#submitButton").click(function(){
		firstname = $("#firstname").val();
		lastname = $("#lastname").val();
		year = $("#year").val();
		hobby = $("#hobby").val();
		$("#infoModal").modal("hide");
	});

	$("#skipButton").click(function(){
		$("#infoModal").modal("hide");
	});

	$("#infoForm").submit(function(){
		var form = $(this).serialize();
		//some code
		return false;

	})


	$('#password').keypress(function (e) {
		
		$(".bubble").fadeOut("slow");
		if (e.which == 13) {
			$(".progress-bar").replaceWith("<div class='progress-bar progress-bar-danger' role='progressbar' style='width: 0;'> \
				<span class='sr-only'></span> \
				</div>");
			var pwd = $(this).val();
			if (pwd == "") {
				$("#randomString").html("Enter a password");
			}
			else {
				var pm = new PasswordMeter();
				pm.checkPassword(pwd, firstname, lastname, year, hobby, false);
				var duration = pm.animationMS;

				if (pm.passwordValid
					goodPassword(duration, pm.feedback);
				else
					badPassword(duration, pm.feedback);

			}
		}
	});
});


function showBubble(number, text) {
	var randomColor = get_random_color();
	$("#bubble-" + number).html(text).css('visibility','visible').css("background-color", randomColor).hide().delay(1000).fadeIn("slow");
}

function get_random_color() {
	var color = "rgba(" + Math.floor((Math.random()*255)+1) + "," + Math.floor((Math.random()*255)+1) + "," + Math.floor((Math.random()*255)+1) + ",0.5)";

	return color;
}

function badPassword(duration, feedback) {

	
	var stringGuesser = setInterval(function() {
		$("#randomString").html(generateString());
	}, 10);


	$('.progress-bar').countTo({
		from: 0,
		to: $("#progress").width(),
		speed: duration,
		refreshInterval: 300,
		onComplete: function(value) {
			setTimeout(function() {
				clearInterval(stringGuesser);
				$("#randomString").html("<b>" + $('#password').val() + "</b>" + " is an unsafe password!");

			}, 500);
			showBubble(1, feedback[0]);
			showBubble(2, feedback[1]);	
			showBubble(3, feedback[2]);	
			showBubble(4, feedback[3]);
			

			
		}
	});	
}

function goodPassword(duration, feedback) {

	var stringGuesser = setInterval(function() {
		$("#randomString").html(generateString());
	}, 10);


	$('.progress-bar').countTo({
		from: 0,
		to: $("#progress").width() * 0.7,
		speed: duration * 0.9,
		refreshInterval: 300,
		onComplete: function(value) {
			$('.progress-bar').countTo({
				from: $("#progress").width() * 0.7,
				to: 0,
				speed: duration * 0.1,
				refreshInterval: 200,
				onComplete: function(value) {

					setTimeout(function() {
						$(".progress-bar").replaceWith("<div class='progress-bar progress-bar-success' role='progressbar'> \
							<span class='sr-only'></span> \
							</div>");
						$(".progress-bar").css("width", $("#progress").width());
						clearInterval(stringGuesser);
						$("#randomString").html("<b>" + $('#password').val() + "</b>" + "     is a safe password!");
						showBubble(1, feedback[0]);
						showBubble(2, feedback[1]);	
						showBubble(3, feedback[2]);	
						showBubble(4, feedback[3]);


					}, 1000);

				}
			});	
		}
	});	
	
}

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