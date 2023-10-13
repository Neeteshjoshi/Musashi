const toggleBtnLight = document.getElementById("toggleBtnLight");
const toggleBtnDark = document.getElementById("toggleBtnDark");
const mainBody = document.getElementById("mainBody");
const heroInfo = document.getElementById("heroInfo");
const contactFormText = document.getElementById("contactFormText");
const Txtname = document.getElementById("Txtname");
const email = document.getElementById("email");
const reason = document.getElementById("reason");
const submitBtn = document.getElementById("submitBtn");

function handleToggleBtnDark() {
  mainBody.style.backgroundColor = "#242424";
  toggleBtnLight.style.display = "block";
  toggleBtnDark.style.display = "none";
  heroInfo.style.color = "#D4D4D4";
  contactFormText.style.color = "#D4D4D4";
  Txtname.style.borderWidth = "2px";
  Txtname.style.borderStyle = "solid";
  Txtname.style.borderColor = "#D4D4D4";
  Txtname.style.color = "#D4D4D4";
  email.style.borderWidth = "2px";
  email.style.borderStyle = "solid";
  email.style.borderColor = "#D4D4D4";
  email.style.color = "#D4D4D4";
  reason.style.borderWidth = "2px";
  reason.style.borderStyle = "solid";
  reason.style.borderColor = "#D4D4D4";
  reason.style.color = "#D4D4D4";
  submitBtn.style.boxShadow = "5px 5px 0px #D4D4D4";
}

function handleToggleBtnLight() {
  mainBody.style.backgroundColor = "#D4D4D4";
  toggleBtnDark.style.display = "block";
  toggleBtnLight.style.display = "none";
  heroInfo.style.color = "#242424";
  contactFormText.style.color = "#242424";
  Txtname.style.borderWidth = "2px";
  Txtname.style.borderStyle = "solid";
  Txtname.style.borderColor = "#242424";
  Txtname.style.color = "#242424";
  email.style.borderWidth = "2px";
  email.style.borderStyle = "solid";
  email.style.borderColor = "#242424";
  email.style.color = "#242424";
  reason.style.borderWidth = "2px";
  reason.style.borderStyle = "solid";
  reason.style.borderColor = "#242424";
  reason.style.color = "#242424";
  submitBtn.style.boxShadow = "5px 5px 0px #242424";
}

toggleBtnDark.addEventListener("click", handleToggleBtnDark);
toggleBtnLight.addEventListener("click", handleToggleBtnLight);
