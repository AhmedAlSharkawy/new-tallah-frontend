module.exports = {
    shared_css: {
        src: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/aos/dist/aos.css',
            './node_modules/zurb-twentytwenty/css/twentytwenty.css',
            './node_modules/swiper/swiper-bundle.min.css'

        ],
        dest: './web/builds/css/vendors.css'
    },
    home_css: {
        src: [
            './web/builds/css/vendors.css',
            './web/builds/css/build.css'

        ],
        dest: './web/builds/css/styles.css'
    },
    home_js: {
        src: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            './node_modules/aos/dist/aos.js',
            './node_modules/zurb-twentytwenty/js/jquery.event.move.js',
            './node_modules/zurb-twentytwenty/js/jquery.twentytwenty.js',
            './node_modules/swiper/swiper-bundle.min.js'
        ],
        dest: './web/builds/js/homeVendors.js'
    },
}
