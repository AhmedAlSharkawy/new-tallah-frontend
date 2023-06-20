// aos
AOS.init({
    duration: 800,
    once: true
}
);

// sticky navbar
window.onscroll = function () {
    var navbar = document.getElementById("header");
    if(typeof(navbar) != 'undefined' && navbar != null) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 90) {
            navbar.className = "header header--sticky";
        } else {
            navbar.className = "header";
        }
    }
};


// hero slider
var mainSlider = new Swiper(".mainSlider", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    speed: 100,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },
});

// article
var articleSlider = new Swiper(".articleSlider", {
    loop: false,
    speed: 1500,
    slidesPerView: 4,
    navigation: {
        nextEl: ".article-next",
        prevEl: ".article-prev",
    },
    pagination: {
        el: ".article-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            spaceBetween: 8,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        500: {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        992: {
            spaceBetween: 12,
            slidesPerView: 4,
            slidesPerGroup: 4,

        },
        1199: {
            spaceBetween: 24,
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
});

// women-cafe
var womenCafeSlider = new Swiper(".women-cafeSlider", {
    loop: false,
    speed: 1500,
    slidesPerView: 1,
    navigation: {
        nextEl: ".women-cafe-next",
        prevEl: ".women-cafe-prev",
    },
    pagination: {
        el: ".women-cafe-pagination",
        clickable: true,
    },
});

// sections
var sectionSlider = new Swiper(".sectionSlider", {
    loop: false,
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 1500,
    // },
    navigation: {
        nextEl: ".section-next",
        prevEl: ".section-prev",
    },
    pagination: {
        el: ".section-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            spaceBetween: 8,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        500: {
            spaceBetween: 16,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            spaceBetween: 16,
            slidesPerView: 3,
            slidesPerGroup: 3,

        },
        1199: {
            spaceBetween: 24,
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
});

// twentytwenty
$(function () {
    $(".twentytwenty-container").twentytwenty();
});

//////// navbar hover effect
var navbarListBtn = ".list-img-container .dropdown-item";
var navBarListFirstChild = $(navbarListBtn + ".hovered");

$(navbarListBtn).hover(
  function() {
    navBarListFirstChild.removeClass('shown');
  }, function() {
    navBarListFirstChild.addClass('shown');
  }
);

$(document).ready(function () {
    setGalleryGridRows();
});

function setGalleryGridRows() {
    var galleryCount = $(".gallery__item").length;

    if(galleryCount <= 5) {
        $(".gallery").css('grid-template-rows', 'repeat(4, 6vw)');
    } else if(galleryCount <= 8) {
        $(".gallery").css('grid-template-rows', 'repeat(7, 6vw)');
    } else if(galleryCount <= 11) {
        $(".gallery").css('grid-template-rows', 'repeat(10, 6vw)');
    } else {
        $(".gallery").css('grid-template-rows', 'repeat(14, 6vw)');   
    }
}
