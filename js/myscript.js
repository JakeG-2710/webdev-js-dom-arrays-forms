
(function(){

    document.getElementById("myHeading").innerHTML="Jake";
    document.querySelector("nav ul li").setAttribute("class", "currentPage");

    document.getElementById("myTestEvent").addEventListener("click",function(ev){ 
        console.info("HELLO")
        document.getElementById("myHeading").innerHTML="Heading";
        console.dir(ev);
    })
    document.querySelector(".red").addEventListener("click",function(ev){ 
        document.querySelector("body").setAttribute("class","redBack");
    })
    document.querySelector(".green").addEventListener("click",function(ev){ 
        document.querySelector("body").setAttribute("class","greenBack");
    })
    document.querySelector(".blue").addEventListener("click",function(ev){ 
        document.querySelector("body").setAttribute("class","blueBack");
    })
    document.querySelector(".reset").addEventListener("click",function(ev){ 
        document.querySelector("body").removeAttribute("class")
    })

    let imageAr=['images/views1.jpg','images/views2.jpg','images/views3.jpg','images/views4.jpg','images/views5.jpg','images/views6.jpg'];
    document.getElementById('myImages').setAttribute('scr',imageAr[2]);
})();

  