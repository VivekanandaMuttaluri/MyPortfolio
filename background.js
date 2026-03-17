// Initialize particles background
particlesJS("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: 2, random: true },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out"
    },
    line_linked: { enable: false }
  }
});