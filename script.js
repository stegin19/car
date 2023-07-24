function white(){
    document.getElementById("imd").setAttribute('src',"./asset/white.webp")
}

function blue(){
    document.getElementById("imd").setAttribute('src',"./asset/blue.webp")
}

function black(){
    document.getElementById("imd").setAttribute('src',"./asset/red.webp")
}

const clk1=document.querySelector("#clk");
clk1.addEventListener("click",function(){
    clk1.textContent="Added to cart";
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
});