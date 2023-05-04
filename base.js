const inpValue = document.getElementById("inpValue");
const submitBtn = document.getElementById("submitBtn");
const numberShow = document.getElementById("numberShow");

submitBtn.addEventListener("click", () => {
  checkValue();
});

const checkValue = () => {
  if (inpValue.value >= 0 && inpValue.value <= 10) {
  } else {
    alert("Your guess is not on the scale pls try agin :/");
    inpValue.value = "";
  }
};
