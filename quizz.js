const wrapper = document.querySelector('.wrapper');
 const question = document.querySelector('.question');
 const image = document.querySelector('.image');
 const yesBtn = document.querySelector('.yes-btn');
 const noBtn = document.querySelector('.no-btn');




 
  yesBtn.addEventListener('click', ()=>{

    question.innerHTML = "I LOVE YOU TOO <3"
    image.src =
    "https://i.imgflip.com/7dafgs.png"
   });

   noBtn.addEventListener('mouseover', ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.Height;


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

   });
