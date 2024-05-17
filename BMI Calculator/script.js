const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weighConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;

  if(bmiValue < 18.5){
    weighConditionEl.innerText = "under weight"
  }else if (bmiValue >= 18.5 && bmiValue <= 29.9) {
    weighConditionEl.innerText = "Overweight"
  }else if (bmiValue >= 30) {
    weighConditionEl.innerText = "Obesity"
  }

}

btnEl.addEventListener("click", calculateBMI);
