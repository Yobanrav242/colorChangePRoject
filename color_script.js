const bg=document.getElementById("bg");
const text=document.getElementById("text");
const bgContent=document.getElementById("backgroundTheme");
const textContent=document.getElementById("textTheme");
const bgButton=document.getElementById("bgButton");
const bgColorId=document.getElementById("bgColorId");
const textColorId=document.getElementById("textColorId");
const textColor=document.querySelector(".textColor");
const textButton=document.getElementById("textButton");
// page change
bg.addEventListener("click",()=>{
    if(bg){
        bgContent.style.display="flex";
        textContent.style.display="none";
    }
    
});
text.addEventListener("click",()=>{
    if(text){
        bgContent.style.display="none";
        textContent.style.display="flex";
    }
})
// color change function
const colorChange=()=>{
    let r=Math.floor(Math.random()*257);
    let g=Math.floor(Math.random()*257);
    let b=Math.floor(Math.random()*257);
    let color=`${r},${g},${b}`;
    bgContent.style.backgroundColor=`rgb(${r} ${g} ${b})`;
    textColor.style.color=`rgb(${r} ${g} ${b})`;
    return color;
}
// bgcolor change
bgButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let colorId=colorChange();
    bgColorId.value=`rbg(${colorId})`;
})
// text color change
textButton.addEventListener("click",(event)=>{
    
    event.preventDefault();
    let colorId=colorChange();
    textColorId.value=`rbg(${colorId})`;
})

