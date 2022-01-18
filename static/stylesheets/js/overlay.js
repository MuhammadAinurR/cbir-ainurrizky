console.log('OVERLAY LOADED');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
console.log(menuBtn);
const menu = document.querySelector('.menu');

let menuStatus = false;

menuBtn.addEventListener('click', () => {
   if (!menuStatus) {
      menu.classList.add('open');
      menuBtn.classList.add('open');
      closeBtn.classList.add('open');
      menuStatus = true;
   } else {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
      closeBtn.classList.remove('open');
      menuStatus = false;
      menu.classList.add('open');
      menuBtn.classList.add('open');
      closeBtn.classList.add('open');
      menuStatus = true;
   }
});

closeBtn.addEventListener('click', () => {
   menu.classList.remove('open');
   menuBtn.classList.remove('open');
   closeBtn.classList.remove('open');
   menuStatus = false;
});

// menuBtn.classList.add('open');
// console.log(menuBtn);
// menuBtn.classList.remove('open');
// console.log(menuBtn);
// console.log('pengecekan selesai');
