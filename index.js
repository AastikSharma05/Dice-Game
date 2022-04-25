var n1 = Math.floor(Math.random() * 6 ) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice"+n1+".png";

var img2 = "images/dice"+n2+".png";
document.querySelector(".dice .img1").setAttribute("src",img1);

document.querySelector(".dice .img2").setAttribute("src",img2);


if(n1>n2)
  {
    const element = document.getElementById("id01");
  element.innerHTML = "🚩 Player 1 Wins ";
  }
else if(n1<n2)
  {
    const element = document.getElementById("id01");
element.innerHTML = "🚩 Player 2 Wins ";
  }
else if(n1==n2){

  const element = document.getElementById("id01");
element.innerHTML = "Draw";
}
