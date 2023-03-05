let greet = document.getElementById("greet");

let masterData = JSON.parse(localStorage.getItem("users"));
let crntData = JSON.parse(localStorage.getItem("currentUser"));

let crntName = crntData[0].username;
let email = crntData[0].email;

displayinfo(crntName, email);

function changePass() {
  pwd = document.getElementById("OldPassword").value;
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
    if (newpass == confirmnew) {
      //Update password to new one
      usrIndex = masterData.findIndex((obj) => obj.pass == pwd);     
      masterData[usrIndex].pass = confirmnew;
      console.log(masterData);
      localStorage.setItem("users", JSON.stringify(masterData));

      //update password on current user also
      crntUsrIndex = crntData.findIndex((obj) => obj.pass == pwd);     
      crntData[usrIndex].pass = confirmnew;
      alert("Password changed Successfully")
      console.log(crntData);
      localStorage.setItem("users", JSON.stringify(crntData));
      
    }
  }
}

function logout() {
  window.location.href = "./index.html";
  localStorage.removeItem("currentUser");
  location.reload()
}

function displayinfo(name, email) {
  console.log(name, email);
  greet.innerHTML = `<p>Welcome Back ${name}</p> <p>Your Email ID : ${email}</p>`;
}
