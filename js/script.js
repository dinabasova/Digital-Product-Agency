$(document).ready(function () {
    function updatePhoto(photoId) {
        var $img = $("#" + photoId).find("img");
        var cacheImg = $img.attr("src");
        var targetImgSrc = $(".reviews_img img").attr("src");

        $img.fadeOut(200, function () {
            $img.attr("src", targetImgSrc);
            $(".reviews_img img").fadeOut(200, function () {
                $(this).attr("src", cacheImg);
                $(this).fadeIn(200);
            });
            $img.fadeIn(200);
        });

        var textId = "#item" + photoId.slice(3);

        $(".reviews_item").removeClass("active");
        $(textId).addClass("active");

        var dotId = "#dot" + photoId.slice(3);

        $(".dots span").removeClass("active-dot");

        $(dotId).addClass("active-dot");
    }

    $(".man_img").click(function () {
        var photoId = $(this).attr("id");
        updatePhoto(photoId);
    });

    $(".dots span").click(function () {
        var dotId = $(this).attr("id");
        var photoId = "man" + dotId.slice(3);
        updatePhoto(photoId);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var navList = document.querySelector(".nav_list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        var targetElement = event.target;
        if (!targetElement.closest(".hamburger") && !targetElement.closest(".nav_list")) {
            navList.classList.remove("active");
        }
    });
});

new WOW().init();