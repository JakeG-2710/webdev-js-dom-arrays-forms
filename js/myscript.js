
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
    document.getElementById('myImages').setAttribute('src',imageAr[0]);
    i=0;
    function chgImage(){
        if (i<imageAr.length)
        {
        console.info('Called');  
        document.getElementById('myImages').setAttribute('src',imageAr[i]);   
        i++;
        }
        else{
            i=0;
            document.getElementById('myImages').setAttribute('src',imageAr[i]);   
            i++;
        }
    }
    setInterval(chgImage, 4000); 
    document.querySelector('myImages').addEventListener("click",chgImage);
})();

  