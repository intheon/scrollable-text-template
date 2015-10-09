$(function() {

	// change the direction only

	// possible values are horizontal or vertical
	var direction = "vertical";

/* rest of code */
	if (direction == "horizontal")
	{
		$(".prev").html("&larr;");
		$(".next").html("&rarr;");
	}
	else if (direction == "vertical")
	{
		$(".prev").html("&uarr;");
		$(".next").html("&darr;");
	}

	$("#scrollable").dragend({
		"direction": direction,
		afterInitialize: function() {
			var first = this.pages[0],
              	last = this.pages[this.pages.length - 1];

			for (i = 0; i <= this.pages.length - 1; i++) 
				{
					$(".pips").append("<div class='pip' data-page='"+(i + 1)+"'>&#9679;</div>");
				}

			$(".pip:first-child").addClass("active");

			$(".pip").click(function() {
				var p = $(event.target).data("page");

        		$("#scrollable").dragend({
          			scrollToPage: p
       			});

       			$(".pip").removeClass("active");

       			$(event.target).addClass("active");
   			 });


			$(".prev").click(function() {
        		$("#scrollable").dragend("right");

        		var c = $(".active").data("page");
        			c -= 1;

        		var l = 0;

        		if (c > l)
        		{
        			$(".pip").removeClass("active");
        			$('.pip[data-page="'+c+'"]').addClass("active");
        		}
        		else return false;

    		});

    		$(".next").click(function() {
        		$("#scrollable").dragend("left");
        		var c = $(".active").data("page");
        			c += 1;

        		var l = $(".pip").length;

        		if (c <= l)
        		{
        			$(".pip").removeClass("active");
        			$('.pip[data-page="'+c+'"]').addClass("active");
        		}
        		else return false;
   			 });

        },onDragEnd: function() {

          var first = this.pages[0],
              last = this.pages[this.pages.length - 1];

          $(".pip").removeClass("active");

          $(".pip").eq(this.page).addClass("active");
        }
	});




});

