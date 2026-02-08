window.addEventListener("scroll",function()
{
    const reveals=this.document.querySelectorAll(".reveal");

    reveals.forEach((el)=>{
        const windowHeight =window.innerHeight;
        const top=el.getBoundingClientRect().top;

        if(top<windowHeight-100)
        {
            el.classList.add("active");
        }
    });
});