import Vivus from 'vivus';

const svgList = document.querySelector('.benefits-list');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const svgCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      new Vivus('icon-hourglass-02', {
        type: 'oneByOne',
        duration: 150,
        animTimingFunction: Vivus.EASE,
      });

      new Vivus('icon-user-01', {
        type: 'oneByOne',
        duration: 150,
        animTimingFunction: Vivus.EASE,
      });

      new Vivus('icon-brush-01', {
        type: 'oneByOne',
        duration: 150,
        animTimingFunction: Vivus.EASE,
      });

      new Vivus('icon-message-chat-circle', {
        type: 'oneByOne',
        duration: 150,
        animTimingFunction: Vivus.EASE,
      });
      svg.unobserve(entry.target);
    }
  });
};

const svg = new IntersectionObserver(svgCallback, options);
svg.observe(svgList);

/*================ SCROLL TO TOP  ============================== */

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  const scrollPosition = window.scrollY + this.window.innerHeight;
  const allDocumentHeight = this.document.documentElement.scrollHeight;

  if (allDocumentHeight - scrollPosition <= 3000) {
    scrollButton.classList.add('visible-scroll');
  } else {
    scrollButton.classList.remove('visible-scroll');
  }
});

document.querySelector('.scroll-to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
