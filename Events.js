//event logic
function buttonResult() {
  alert("hi");
}
let btn_value = document.getElementById("demo");
btn_value.addEventListener("click", buttonResult);

const buttonResult1 = () => {
  alert("hello");
};
let btn_value1 = document.getElementById("demo1");
btn_value1.addEventListener("click", buttonResult1);
//dynamic logiv
let info_val = document.getElementById("info");
const mouseoverRes = () => {
  info_val.style.color = "blue";
};
const mouseoutRes = () => {
  info_val.style.color = "";
};
info_val.addEventListener("mouseover", mouseoverRes);
info_val.addEventListener("mouseout", mouseoutRes);
//on input logic
let input_val = document.get
ElementById("fname");
let para_val = document.getElementById("sample");
const onInputRes = () => {
  let input_info = input_val.value;
  para_val.textContent = input_info;
};
input_val.addEventListener("input", onInputRes);
