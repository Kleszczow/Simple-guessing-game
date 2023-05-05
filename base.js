const inpValue = document.getElementById("inpValue");
const submitBtn = document.getElementById("submitBtn");
const numberShow = document.getElementById("numberShow");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const canvas = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

submitBtn.addEventListener("click", () => {
  checkValue();
});

const checkValue = () => {
  if (inpValue.value >= 0 && inpValue.value <= 10 && inpValue.value !== "") {
    resoluts();
  } else {
    alert("Your guess is not on the scale pls try agin :/");
    inpValue.value = "";
  }
};

const aiChocie = (ai) => {
  return Math.floor(Math.random() * 10 + 1);
};

const resoluts = () => {
  let ai = aiChocie();
  let player = inpValue.value;
  numberShow.innerHTML = ai;
  let resolut = ai == player ? winFunction() : lostunction();
};

const winFunction = () => {
  numberShow.style.color = "green";
  confetti();
};

const lostunction = () => {
  numberShow.style.color = "red";
};

const confetti = () => {
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
  });
};
