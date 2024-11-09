function funF() {
  hide(index);
  if (index < 3) { 
    index += 1; // Если индекс меньше 3, увеличиваем на 1
  } else {
    index = 1; // Если больше 3, то переходим к 1
  }
  show(index);
}

function funB() {
    hide(index);
    if (index > 1) {
      index -= 1; // Уменьшаем индекс, если он больше 1
    } else {
      index = 3; // Если индекс 1, переходим к 3
    }
    show(index);
}

function show(i) {
  document.getElementById("block" + i).classList.add("redText");
}

function hide(i) {
  document.getElementById("block" + i).classList.remove("redText");
}

let index = 1;
const btnF = document.getElementById("forward");
btnF.addEventListener("click", funF);

const btnB = document.getElementById("back");
btnB.addEventListener("click", funB);
