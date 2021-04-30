const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const value = document.querySelector('.value');
var num=0;
increase.addEventListener('click', function(){
  num++;
  value.textContent=num;
  colour();
  });
decrease.addEventListener('click', function(){
    num--;
    value.textContent=num;
    colour();
  });
  reset.addEventListener('click', function(){
    num=0;
    value.textContent=num;
    value.style.color='black';
  });
  function colour(){
    if(num>0){
        value.style.color='green';
    }
    if(num<0){
        value.style.color='red';
    }
    if(num===0){
        value.style.color='black';
    }   
  }
//  array.forEach(element => {
     
//  });
//  if()
// console.dir(btn);


