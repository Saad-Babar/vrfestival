// images slider 
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    425: {
      items: 1.3,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3.5,
    },
    1024: {
      items:2.5,
    },
    1366: {
      items: 3,
    },
    2560: {
      items: 5.5,
    }

  }
});
// Pause the carousel on mouseenter
owl.on('mouseenter', function() {
  owl.trigger('stop.owl.autoplay');
});
// Resume the carousel on mouseleave
owl.on('mouseleave', function() {
  owl.trigger('play.owl.autoplay');
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
// mobl show hide 
function mobshow() {
  var x = document.getElementById("dropdon");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

