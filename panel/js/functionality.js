$(function() {

	// possible values are horizontal or vertical
	var direction = "vertical";





  // leave as is
	if (direction == "horizontal") useDragEnd(direction);

  var userAgent = /iPad|iPhone|iPod/.test(navigator.platform);

  if (userAgent)
  {
    if (direction == "vertical") useDragEnd(direction);
  }
  else
  {
    if (direction == "vertical") useScrollify(direction);
  }

});



function useScrollify(direction)
{

  $(".panel").addClass("scroll");

    // add some pips

    var nPans = $(".panel").length;

    for (i = 0; i < nPans; i++)
    {
      $(".pips").append("<div class='pip' data-page='"+(i + 1)+"'>&#9679;</div>");
    }

    $(".pip:first-child").addClass("active");

    $(".pip").click(function() {

        var p = $(event.target).data("page");

        $.scrollify.move(+(p - 1));

        /*

        $(".pip").removeClass("active");

        $(event.target).addClass("active");

        */

    });


    // create 
  setTimeout(function(){
      // allow snapping scrolling


      $.scrollify({
        section:    ".scroll",
        sectionName:  "name",
        easing:     "easeOutExpo",
        scrollSpeed:  1000,
        offset :    0,
        scrollbars:   false,
        before:     function(event){
          // event is just the number of the panel
          var integer = + (event + 1);

          $(".pip").removeClass("active");

          $('.pip[data-page="'+integer+'"]').addClass("active");
        }
      });

  },100)

    $(".prev").html("&#9650;");
    $(".next").html("&#9660;");

    $(".prev").click(function(event){ 

      $.scrollify.previous();
    })
    $(".next").click(function(event){

      $.scrollify.next();
    })

}

function animatePips(index)
{

}


function useDragEnd(direction)
{
  if (direction == "horizontal")
  {
    $(".prev").html("&larr;");
    $(".next").html("&rarr;");
  }
  else
  {
    $(".prev").html("&#9660;");
    $(".next").html("&#9650;");
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


}
