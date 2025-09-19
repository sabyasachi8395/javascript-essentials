function calculateArea() {
  let length, width;

  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  let area = length * width;

  document.getElementById("result").innerText = "Area: " + area;

}