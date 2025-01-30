document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementById('share-btn');
  const socials = document.getElementById('socials');
  const ACTIVE = 'active';
  
  shareBtn.addEventListener('click', toggleSocials)
  
  function toggleSocials() {
    if(socials.classList.contains(ACTIVE)) {
      socials.classList.remove(ACTIVE);
    } else {
      socials.classList.add(ACTIVE);
    }
  }
  
  document.addEventListener("click", function (event) {
    if(!shareBtn.contains(event.target) && !socials.contains(event.target)) {
      socials.classList.remove(ACTIVE);
    }
  });
})
