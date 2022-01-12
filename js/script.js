let hamIcon=document.getElementById('hamIcon');
let closeIcon=document.getElementById('closeIcon');
let mobileMenu=document.getElementById('mobileMenu');
let mobileLi=Array.from(document.querySelectorAll('#mobileUl li'));

hamIcon.addEventListener("click",function () {
    mobileMenu.style.display='block';
})
closeIcon.addEventListener("click",function () {
    mobileMenu.style.display='none';
})

mobileLi.forEach((li)=>{
    li.addEventListener('click',function () {
        mobileMenu.style.display='none';
    })
})