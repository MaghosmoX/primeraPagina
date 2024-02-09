
var navHeader = document.querySelector('.header-nav');

window.addEventListener('scroll', function() {
  
    if (window.scrollY > 300) {
        navHeader.style.setProperty('background-color', 'rgba(0, 0, 0, 0.5)',);
        navHeader.style.transition = 'background-color 0.3s ease-in';
    } else {
      
        navHeader.style.setProperty('background-color', 'transparent');
        navHeader.style.transition = 'background-color 0.3s ease-in'; 
    }
});
