function suffle(){

     const img=document.getElementById("image");
     let randomnumber=Math.floor(Math.random()*6)+1

     console.log(randomnumber);
     img.setAttribute('src','randomnumber.png')
}
function anim(){
    setTimeout(suffle,500);
    const img=document.getElementById("image");
    img.setAttribute("src","dic-anim.gif")
}