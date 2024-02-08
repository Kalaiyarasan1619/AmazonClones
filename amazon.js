const imgs=document.querySelectorAll(".header-slider ul img");
const previous_button=document.querySelector(".control-previous");
const next_button=document.querySelector(".control-next");
let n=0;
function changeSlider(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';
        }
        imgs[n].style.display="block";
}
changeSlider();

previous_button.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlider();
})

next_button.addEventListener('click',(e)=>{
    if(n< imgs.length -1){
        n++;
    }else{
        n=imgs.length-1;
    }
    changeSlider();
})
const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    });
}