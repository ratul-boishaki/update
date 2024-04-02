const x=document.querySelector(".manu-terget");

const y=document.querySelector(".nav__ul");
x.addEventListener("click",function(){
    if(y.classList.contains("show__ul")){
        y.classList.remove("show__ul");
    }else{
        y.classList.add("show__ul")
    }
})



