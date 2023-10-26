

// images slider 

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: true,
          loop: true,
      },
      600: {
          items: 1,
          nav: false,
          loop: true,
      },
      1000: {
          items: 3.5,
          nav: true,
          loop: true,
      }
  }
});


// sidenav 

window.addEventListener('scroll', function() {
  // Get the position of the .thatha element
  const thathaElement = document.querySelector('.thatha');
  const thathaPosition = thathaElement.getBoundingClientRect();
  
  // Get the sidebar element
  const sidebar = document.querySelector('.sidenav');
  
  // Add or remove the "hidden" class based on scroll position
  if (thathaPosition.top < window.innerHeight) {
      sidebar.classList.add('hidden');
  } else {
      sidebar.classList.remove('hidden');
  }
});
