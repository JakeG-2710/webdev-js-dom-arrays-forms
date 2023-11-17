
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

    let imageAr=['images/view1.jpg','images/view2.jpg','images/view3.jpg','images/view4.jpg','images/view5.jpg','images/view6.jpg'];
    document.getElementById('myImages').setAttribute('src',imageAr[2]);
    function chgImage(){
        console.info('Called');
        
    }
    setInterval(chgImage,2000); 
})();

  