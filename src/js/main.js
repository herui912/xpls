/* ==========================================================================

    Project: test
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function ($) {

    'use strict';

    var App = {

        /**
         * Init Function
         */
        init: function () {
            App.buttonAction();
        },

        buttonAction: function () {
            var imgarr = ["img/a.png", "img/b.png", "img/c.png", "img/d.png"];
            var $slides = $('#slides');
            var $slide = $slides.find('.slide');
            var last = $slide.length - 1;
            var imgarrlen = imgarr.length;
            for (var i = 0; i < $slide.length; i++) {
                $('#' + i).attr("src", imgarr[i]);
            }
            $("#next").click(function () {
                var currenturl = [];
                for (var i = 0; i < $slide.length; i++) {
                    currenturl.push($('#' + i).attr("src"));
                }
                var cururllen = currenturl.length;
                var currenturllastitem = currenturl[cururllen - 1];
                var imgarrlastitem = imgarr[imgarrlen - 1];
                var imgarrposition = 0;
                for (var i = 0; i < imgarrlen; i++) {
                    if (currenturllastitem == imgarr[i]) {
                        imgarrposition = i;
                    }
                }
                for (var i = 0; i < $slide.length - 1; i++) {
                    $('#' + i).attr("src", currenturl[i + 1]);
                }
                if (imgarrposition != imgarrlen - 1) {
                    $('#' + last).attr("src", imgarr[imgarrposition + 1]);
                } else {
                    $('#' + last).attr("src", imgarr[0]);
                }

            });
            $("#pre").click(function () {
                var currenturl = [];
                for (var i = 0; i < $slide.length; i++) {
                    currenturl.push($('#' + i).attr("src"));
                }
                var currenturlfirstitem = currenturl[0];
                var imgarrfirstitem = imgarr[0];
                var imgarrposition1 = -1;
                for (var i = 0; i < imgarrlen; i++) {
                    if (currenturlfirstitem == imgarr[i]) {
                        imgarrposition1 = i;
                    }
                }
                for (var i = $slide.length - 1; i > 0; i--) {
                    $('#' + i).attr("src", currenturl[i - 1]);
                }
                if (imgarrposition1 != 0) {
                    $("#0").attr("src", imgarr[imgarrposition1 - 1]);
                } else {
                    $("#0").attr("src", imgarr[imgarrlen - 1]);
                }
            });
            $("#pre, #next").mousedown(function () {
                $(this).css("background-color", "#AA1845");
            });
            $("#pre, #next").mouseup(function () {
                $(this).css("background-color", "#f32363");
            });

        }
    };

    $(function () {
        App.init();
    });

})(jQuery);