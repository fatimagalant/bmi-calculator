function bmiCalculator() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height % 1 >= 0 && weight % 1 >= 0) {
    let heightInMs = height / 100;

    let BMI = weight / (heightInMs * heightInMs);

    let result =
      "<b>Your Body Mass Index (BMI) is </b> " + BMI.toFixed(2) + ".";

    if (BMI <= 18.5) {
      result += "<br><b> You are underweight.</b>";
    } else if (BMI > 18.5 && BMI <= 24.9) {
      result += "<br> <b>You have normal weight.</b>";
    } else if (BMI > 24.9 && BMI <= 29.9) {
      result += "<br> <b>You are overweight.</b>";
    } else if (BMI > 30) {
      result += "<br><b> You are obese.</b>";
    }

    document.getElementById("output").innerHTML = result;
  } else {
    alert("Enter valid inputs");
  }
}
