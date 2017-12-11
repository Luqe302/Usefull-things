var slider = $('.slider'),
    bar = slider.find('.slider__main-inner-bar'),
    cursor = slider.find('.slider__cursor-wrapper'),
    counter = slider.find('.slider__counter');


    var generateNewSlider = function(x) {

        var stepsWrapper = slider.find('.slider__steps');

        for (var i = 0; i < x; i++) {

            var smallBar = $('<div class="slider__small-bar">');

            for (var j = 0; j < 1; j++) {

                var smallInnerBar = $('<div class="slider__small-inner">');
                smallBar.append(smallInnerBar);

            }

            stepsWrapper.prepend(smallBar);

        }

    };

    generateNewSlider(32);


    var steps = slider.find('.slider__small-bar');

    bar.css('height', 1 / steps.length * 100 + '%');

    steps.each(function(i, step) {

        var percentageValue = i / steps.length * 100;

        step = $(step);

        step.on('click', function() {

            steps.find('.slider__small-inner').removeClass('slider__small-inner--active slider__small-inner--first');

            step.find('.slider__small-inner').addClass('slider__small-inner--active slider__small-inner--first');

            step.nextAll().find('.slider__small-inner').addClass('slider__small-inner--active');
            console.log(step.nextAll().find('.slider__small-inner'));

            counter.text(steps.length -1 - i);

            cursor.css('top', percentageValue + '%');

            bar.css('height', 100 - percentageValue + '%');

        });

    });
