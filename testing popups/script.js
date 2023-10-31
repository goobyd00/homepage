$(function() {
    function popUpRandomly($element) {
        var $pop = $element;

        // Set random position
        var top = Math.floor(Math.random() * ($(window).height() - $pop.height()));
        var left = Math.floor(Math.random() * ($(window).width() - $pop.width()));

        // Apply the position to the div
        $pop.css({ top: top + 'px', left: left + 'px' });

        // Show the div and keep it visible for 5 seconds before abruptly hiding it
        $pop.show().delay(5000).queue(function(next) {
            $pop.hide();
            next();
        });
    }

    // Initially hide the divs
    $('.pop').hide();

    // Call the popUpRandomly function for each div at random intervals (e.g., every 6 seconds)
    setInterval(function() {
        popUpRandomly($('#pop'));
        popUpRandomly($('#pop2'));
    }, 6000); // 5 seconds of visibility + 1 second delay
});

