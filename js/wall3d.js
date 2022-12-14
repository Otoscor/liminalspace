(function() {

  const stageElem = document.querySelector('.stage');
  const houseElem = document.querySelector('.house');
  const barEl = document.querySelector('.progress-bar');
  const mousePos = {x: 0, y: 0};
  let maxScrollValue;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const scrollPer = pageYOffset / maxScrollValue; 
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = 'translateZ(' + zMove +'vw)'

    // progress bar
    barEl.style.width =  scrollPer * 100 + '%';

    if(scrollPer === 1) {
      window.location.href = './floor.html';
    }
  })

  window.addEventListener('mousemove', function(e) {
    mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2
    mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2
    stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
  })

  window.addEventListener('resize', resizeHandler)
  resizeHandler();

  



})();