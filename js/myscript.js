
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
})();

  