console.log(innerWidth)

const menu = document.querySelector('#closeMenu');

const head = document.querySelector('#head');
const adm = document.querySelector('#adm')
let open = false
menu.addEventListener('click',()=>{
  if(open===false){
  head.style='margin-top:30px; transition :1s';
  open=true;
  }
  else if(open===true){
  head.style='margin-top:-95px; transition :1s';
  open=false;
  }
  }
)
adm.addEventListener('click',()=>{
  sweetAlert("Oops...", "لم يسمح ادم باستخدام رقمه في الموقع حتي الان", "error");
})