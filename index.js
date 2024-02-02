let countval = 0;



let submit = document.getElementById("submit");
let count = document.getElementById("count1");
count.textContent = countval;
let enter = document.getElementById("enter");

let reset = document.getElementById("reset");

submit.onclick = function(){

  let pcount = document.getElementById("pcount").value;
  pcount = Number(pcount);

  enter.textContent = pcount;
  countval += pcount;
  count.textContent = countval;
}

reset.onclick = function(){

  countval = 0;
  enter.textContent = countval;
  count.textContent = countval;
}

