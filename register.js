
let btn = document.getElementById('btn'),
user = document.getElementById('user'),
pass= document.getElementById('pass'),
fname = document.getElementById('fname'),
cpass = document.getElementById('cpass'),
email = document.getElementById('email'),
pnumber = document.getElementById('pnumber'),
state = document.getElementById('state'),
month = document.getElementById('month'),
day = document.getElementById('day'),
loding = document.querySelector('#loding'),
che = document.getElementById('che');
// show = document.getElementById('show');


// For error/success prompt check
const err = document.querySelector('#err');
const err_in = document.querySelector('#err_in');
const succ = document.querySelector('#succ');
const succ_in = document.querySelector('#succ_in');



btn.addEventListener('click', function() {
  loding.style.visibility = "visible";
  setTimeout(() => {

    // after 2secs we hide it back for result
   
    if(fname.value == ''){
      fname.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> Please put your first name";
      // alert("Please put your first name");
        setTimeout(
          ()=>{
              loding.style.visibility = "hidden";
          },
    900 )
        
    }else if(pass.value == ''){
      pass.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> Please put your password";
        setTimeout(
          ()=>{
              loding.style.visibility = "hidden";
          },
    900 )
        
    }else if(cpass.value == ''){
      cpass.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> Please comfirm password";
      // alert("Please put your surname");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )

    }else if(email.value == ''){
      email.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please fill the email";
      // alert("please fill the email");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )
    
    }else if(pnumber.value == ''){
      pnumber.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please put your number";
      // alert("please put your number");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )

    }else if(state.value == ''){
      state.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please put your state";
      // alert("please put your state");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )

    }else if(month.value == ''){
      month.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please put your month";
      // alert("please put your month");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )

    }else if(day.value == ''){
      day.style.borderColor = "red";
      err.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please put your day";
      // alert("please put your day");
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )
    
    }else if(!che.checked){
      che.style.display = "block";
      err_in.innerHTML = "<b>Error:</b> please check the T&C field";
      // alert('please check the T&C field');
      setTimeout(
        ()=>{
            loding.style.visibility = "hidden";
        },
   900 )

    }else{
      if(pass.value === cpass.value){
        setTimeout(() => {
          sessionStorage.setItem('firstname', fname.value);
          sessionStorage.setItem('email', email.value);
          sessionStorage.setItem('pass', pass.value);
          window.location.replace('login.html');
        }, 5000);
      }else{
        err.style.display = "block";
        err_in.innerHTML = "<b>Error:</b> Incorrect password";
        // alert('please kindly fill the forms');
    }
  
  }
})
});
