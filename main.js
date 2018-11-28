// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXMdAzSTIqfS53OrTnclHQyS-6DuWEk7E",
    authDomain: "thsa-957fd.firebaseapp.com",
    databaseURL: "https://thsa-957fd.firebaseio.com",
    projectId: "thsa-957fd",
    storageBucket: "thsa-957fd.appspot.com",
    messagingSenderId: "1046384946248"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var phoneoffirm = getInputVal('phoneoffirm');
  var emailoffirm = getInputVal('emailoffirm');
  var natureofcompany = getInputVal('natureofcompany');
  var dlno = getInputVal('dlno');
  var gstno = getInputVal('gstno');
  var panno = getInputVal('panno');
  var agree = getInputVal('agree');


  // Save message
  saveMessage(name, company, email, phone, phoneoffirm, emailoffirm, natureofcompany, dlno, gstno, panno, agree);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, phoneoffirm, emailoffirm, natureofcompany, dlno, gstno, panno, agree){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    phoneoffirm:phoneoffirm,
    emailoffirm:emailoffirm,
    natureofcompany:natureofcompany,
    dlno:dlno,
    gstno:gstno,
    panno:panno,
    agree:agree
  });
}

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var phoneoffirm = getInputVal('phoneoffirm');
  var emailoffirm = getInputVal('emailoffirm');
  var natureofcompany = getInputVal('natureofcompany');
  var dlno = getInputVal('dlno');
  var gstno = getInputVal('gstno');
  var panno = getInputVal('panno');
  var agree = getInputVal('agree');

  // Save message
  saveMessage(name, company, email, phone, phoneoffirm, emailoffirm, natureofcompany, dlno, gstno, panno, agree);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, phoneoffirm, emailoffirm, natureofcompany, dlno, gstno, panno, agree){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    phoneoffirm:phoneoffirm,
    emailoffirm:emailoffirm,
    natureofcompany:natureofcompany,
    dlno:dlno,
    gstno:gstno,
    panno:panno,
    agree:agree
    
  });
}