/*jslint browser:true */
/*global $, jQuery, alert*/
$(document).ready(function () {
    $('#basecamp').hover(function () {
        $('.headline, #bc_headline').toggle();
    });
    $('#highrise').hover(function () {
        $('.headline, #hr_headline').toggle();
    });
    $('#campfire').hover(function () {
        $('.headline, #cf_headline').toggle();
    });
});

