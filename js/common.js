
	
 $(document).ready(function() {

              var owl = $('#owl-demo-1');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 14000,
                //autoplayHoverPause: true,
				autoWidth:false,
                loop: true,
                margin: 10,
				
				mouseDrag: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  500: {
                    items: 1,
                    nav: false
                  },
				  700: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: false,
                    loop: true,
                    margin: 20
                  },
				  1300: {
                    items: 1,
                    nav: false,
                    loop: true,
                    margin: 20
                  },
				  1600: {
                    items: 1,
                    nav: false,
                    loop: true,
                    margin: 20
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })

 $(document).ready(function() {

              var owl = $('#owl-demo-2');
              owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
				//animateOut: 'fadeOut',
				
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  500: {
                    items: 2,
                    nav: false
                  },
				  700: {
                    items: 2,
                    nav: false
                  },
                  990: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  },
				  1300: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  },
				  1600: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })
			  				  	


 $(document).ready(function() {

              var owl = $('#owl-demo-3');
              owl.owlCarousel({
                items: 3,
                loop: false,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
				
				
                loop: true,
                margin: 0,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  500: {
                    items: 1,
                    nav: false
                  },
				  700: {
                    items: 2,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  },
				  1300: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  },
				  1600: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })



	
 $(document).ready(function() {

              var owl = $('#owl-demo-4');
              owl.owlCarousel({
                items: 3,
                loop: false,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
				
                loop: false,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 2,
                    nav: true
                  },
                  500: {
                    items: 2,
                    nav: false
                  },
				  700: {
                    items: 3,
                    nav: false
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
                  },
				  1300: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
                  },
				  1600: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })


				
				

 $(document).ready(function() {

              var owl = $('#owl-demo-5');
              owl.owlCarousel({
                items: 5,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
				
                loop: true,
                margin: 0,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  500: {
                    items: 2,
                    nav: false
                  },
				  700: {
                    items: 3,
                    nav: false
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 0
                  },
				  1300: {
                    items: 5,
                    nav: true,
                    loop: false,
                    margin: 0
                  },
				  1600: {
                    items: 5,
                    nav: true,
                    loop: false,
                    margin: 0
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })


	
												

//Responsive js


const mediaQuery = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
 


 $(document).ready(function() {

              var owl = $('#owl-demo-1');
              owl.owlCarousel({
                items: 5,
                loop: false,
                margin: 10,
                autoplay: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
				
                loop: false,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 2,
                    nav: true
                  },
                  500: {
                    items: 3,
                    nav: false
                  },
				  700: {
                    items: 3,
                    nav: false
                  },
                  
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })
			  	
				


 $(document).ready(function() {

              var owl = $('#owl-demo-2');
              owl.owlCarousel({
                items: 3,
                loop: false,
                margin: 10,
                autoplay: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
				
                loop: false,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 2,
                    nav: true
                  },
                  500: {
                    items: 2,
                    nav: false
                  },
				  700: {
                    items: 3,
                    nav: false
                  },
                  
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })
			  	
 $(document).ready(function() {

              var owl = $('#owl-demo-3');
              owl.owlCarousel({
                items: 3,
                loop: false,
                margin: 10,
                autoplay: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
				
                loop: false,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  500: {
                    items: 1,
                    nav: false
                  },
				  700: {
                    items: 2,
                    nav: false
                  },
                  
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })
			  
			  
			  
			  							  
  
}

//Responsive js



