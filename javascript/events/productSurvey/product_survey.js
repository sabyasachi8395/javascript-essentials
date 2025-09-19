let feedbackBtn = document.getElementById('submitBtn');
feedbackBtn.addEventListener('click', submitFeedback);

let username, age, email, job, designation, productType, feedback;

function submitFeedback() {
  username = document.getElementById('name').value;
  age = document.getElementById('age').value;
  email = document.getElementById('email').value;
  job = document.getElementById('job').value;
  designation = document.getElementById('designation').value;
  productType = document.getElementById('productType').value;
  feedback = document.getElementById('feedbackText').value;

  alert("Thanks for your feedback!");

  displayFeedback();
}

function displayFeedback() {
  document.getElementById('userName').innerText = username;
  document.getElementById('userAge').innerText = age;
  document.getElementById('userEmail').innerText = email;
  document.getElementById('userJob').innerText = job;
  document.getElementById('userDesignation').innerText = designation;
  document.getElementById('userProductChoice').innerText = productType;
  document.getElementById('userFeedback').innerText = feedback;
  document.getElementById('userInfo').style.display = 'block';
}

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });