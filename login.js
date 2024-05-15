let btn = document.getElementById('btn'),
  email = document.getElementById('email'),
  pass = document.getElementById('pass'),
  loding = document.querySelector('#loding'),
  che = document.getElementById('che');

btn.addEventListener('click', function(){
    loding.style.visibility = "visible";
    if(email.value == ''){
        email.style.borderColor = "red";
        email.setAttribute("autofocus","autofocus");
        // email.title = "Please Fill up this field";
        alert("Please Fill The email");
        setTimeout(
            ()=>{
                loding.style.visibility = "hidden";
            },
       900 )
        
    }else if(pass.value == ''){
        pass.style.borderColor = "red";
        alert("Please Fill The Password");
        setTimeout(
            ()=>{
                loding.style.visibility = "hidden";
            },
       900 )
        
    }else{
        if(email.value != sessionStorage.getItem('email')){
            alert('Wrong Email entered.');
        }else if(pass.value != sessionStorage.getItem('pass')){
            alert('Wrong Password entered.');
        }else{
            setTimeout(() => {
                sessionStorage.setItem('loggedin', 'yes');
                window.location.replace('local.html');
            }, 5000);
        }
    }
});

che.addEventListener('change', function(){
    if(che.checked){
        pass.type = 'text';
    }else{
        pass.type = 'password';
    }
  });