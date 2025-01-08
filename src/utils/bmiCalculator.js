export const calculateBMI = (weight, height, age, gender) => {
  if (!weight || !height) {
    return { bmi: null, category: "Please enter height and weight values!" };
  }

  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters ** 2);

  let category = "";

  if (age < 18) {
    if (bmi < 18.5) category = "Underweight (Teen)";
    else if (bmi >= 18.5 && bmi < 24) category = "Normal weight (Teen)";
    else category = "Overweight (Teen)";
  } else {
    if (gender === "male") {
      if (bmi < 20) category = "Underweight";
      else if (bmi >= 20 && bmi < 25) category = "Normal weight";
      else category = "Overweight or Obesity";
    } else {
      if (bmi < 19) category = "Underweight";
      else if (bmi >= 19 && bmi < 24) category = "Normal weight";
      else category = "Overweight or Obesity";
    }
  }

  return { bmi: bmi.toFixed(1), category };
};
