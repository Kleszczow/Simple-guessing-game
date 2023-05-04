const inpValue = document.getElementById("inpValue");
const submitBtn = document.getElementById("submitBtn");
const numberShow = document.getElementById("numberShow");
const win = document.getElementById("win");
const lost = document.getElementById("lost");

submitBtn.addEventListener("click", () => {
  checkValue();
});

const checkValue = () => {
  if (inpValue.value >= 0 && inpValue.value <= 10 && inpValue.value !== "") {
    numberShow.innerHTML = aiChocie();
    resoluts();
  } else {
    alert("Your guess is not on the scale pls try agin :/");
    inpValue.value = "";
  }
};

const aiChocie = (ai) => {
  return Math.floor(Math.random() * 11);
};

const resoluts = () => {
  let ai = aiChocie();
  let player = inpValue.value;
  let resolut = ai == player ? winFunction() : lostunction();
};

const winFunction = () => {
  lost.style.display = "none";
  win.style.display = "block";
};
const lostunction = () => {
  win.style.display = "none";
  lost.style.display = "block";
};
