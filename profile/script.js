// Write your script here
let greet = document.getElementById("greet");

let masterData = JSON.parse(localStorage.getItem("users"));
let crntData = JSON.parse(localStorage.getItem("currentUser"));
let fname = crntData[0].fName;
let lname = crntData[0].lName;
let crntName = `${crntData[0].fName} ${crntData[0].lName}`;
let email = crntData[0].email;

displayinfo(crntName, email);

function changePass() {

  let pwd = document.getElementById("OldPassword").value;
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value

  let newpass = document.getElementById("NewPassword").value;
  let confirmnew = document.getElementById("cNewPassword").value;
  let validPass =
    masterData.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (data) => data.email.toLowerCase() == email && data.pass == pwd
    );
  console.log(validPass);

  if (!validPass) {
    alert("Incorrect password");
  } else {
    if (newpass!=pwd && newpass == confirmnew) {
      //Update password to new one
      let usrIndex = masterData.findIndex((obj) => obj.pass == pwd); 
      masterData[usrIndex].fName = firstName;
      masterData[usrIndex].lName = lastName;
      masterData[usrIndex].pass = confirmnew;

      
      localStorage.setItem("users", JSON.stringify(masterData));
      console.log(masterData);
      //update password on current user also
      // let crntUsrIndex = crntData.findIndex((obj) => obj.pass == pwd);     
      crntData[usrIndex].pass = confirmnew;
      crntData[usrIndex].fName = firstName;
      crntData[usrIndex].lName = lastName;

      
      console.log(crntData);
      localStorage.setItem("currentUser", JSON.stringify(crntData));
      alert("Password changed Successfully")
      
    }
    else{
      alert("New password and Old password cannot be same");
    }
  }
}

function logout() {
  window.location.href = "../index.html";
  localStorage.removeItem("cart");
  localStorage.removeItem("currentUser");
}

function displayinfo(name, email) {
  console.log(name, email);
  greet.innerHTML = `<p>Welcome Back ${name} </p> <p>Your Email ID : ${email}</p>`;
}
