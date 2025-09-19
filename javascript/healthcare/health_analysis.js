
const patients = []
document.getElementById("addPatient").onclick = function() {
  console.log("Add Patient button clicked");

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const condition = document.getElementById("condition").value;

  if (!name || isNaN(age) || !condition) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const patient = { name, age, condition };
  patients.push(patient);
  console.log("Patient added:", patient);
  alert("Patient added successfully!");

  resetForm();

  generateReport();
};

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("condition").value = "";
}

function generateReport() {
  const numberOfPatients = patients.length;

  const reportElement = document.getElementById("report");
  reportElement.innerHTML = `<h3>Total Patients: ${numberOfPatients}</h3>`;

  const conditionCount = {
    'Diabetes': 0,
    'Thyroid': 0,
    'High Blood Pressure': 0,
  };

  const genderConditionsCount = {
    Male: {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    },
    Female: {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    },
  }

  patients.forEach(patient => {
    if (patient.condition in conditionCount) {
      conditionCount[patient.condition]++;
    }
  });

  report.innerHTML += `Conditions Breakdown:<br>`;
  for (const condition in conditionCount) {
    report.innerHTML += `${condition}: ${conditionCount[condition]}<br>`;
  }

  report.innerHTML += `<br>Gender-Based Conditions:<br>`;
  for (const gender in genderConditionsCount) {
    report.innerHTML += `${gender}:<br>`;
    for (const condition in genderConditionsCount[gender]) {
      report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
    }
  }
}
