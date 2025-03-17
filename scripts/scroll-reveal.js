const configs = { 
  duration: 1500,
  distance: '50%',
  origin: 'bottom',
  interval: 350,
  opacity: 0,
  viewFactor: 0.3,
  reset: false
};

window.sr = ScrollReveal({reset: true});
sr.reveal('.reveal-effect', configs);