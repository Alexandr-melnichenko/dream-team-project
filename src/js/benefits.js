import Vivus from 'vivus';

const svgList = document.querySelector('.benefits-list');

const svgSet = [
  'icon-hourglass-02',
  'icon-user-01',
  'icon-brush-01',
  'icon-message-chat-circle',
];

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
