document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the name from localStorage
  var name = localStorage.getItem('name');

  // Display the name in an <h2> element
  var welcome = document.createElement('h2');
  welcome.setAttribute('class','container form-div mt-5 p-5 text-center')
  welcome.textContent = 'Welcome ' + name;
  document.body.appendChild(welcome);
});