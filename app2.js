body{background-color: rgb(150, 190, 235);}
var document=["imgs/archivo.csv",
                "imgs/hj.jpg",
                "imgs/hojas2.jpg",
                "imgs/trop.jpg",
                "imgs/medusa.jpg"];
var btn=document.querySelector("button");
var foto=document.querySelector("img");
var contador=1

btn.addEventListener("click",function() {
    console.log(fotos[2])
    foto.src=fotos [contador];
    contador=contador+1;
    

    })
