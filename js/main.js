   $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    margin: 35,
                     responsive:{
                         0: {
                             items: 1
                         },
                         700:{
                             items: 2
                         },
                         1000:{
                             items: 3
                         }
                     }
                });
                $(".slide-two").owlCarousel({
                    margin: 35,
                     responsive:{
                         0: {
                             items: 1
                         },
                         700:{
                             items: 2
                         },
                         1000:{
                             items: 3
                         }
                     }
                });
                 $(".slide-tree").owlCarousel({
                    items:1,
                    center: true
                });
            });
            