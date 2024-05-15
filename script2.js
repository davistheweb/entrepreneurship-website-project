const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const show = document.querySelector('#show');
const btn_log = document.querySelector('#btn_log');

btn_log.addEventListener('click', function(){
   let act_sub = confirm("Are you set to login ?");
    if(act_sub == true){
        if(user.value == ''){
            alert('please Select a specific User');
        }else if(email.value == ''){
            alert('please fill the "Email" field');
        }else if(pass.value == ''){
            alert('please fill the "Password" field');
            
        }else{
            if(user.value != sessionStorage.getItem('user')){
                alert('Please your are not registered as ' + user.value);
            }else if(email.value != sessionStorage.getItem('email')){
                alert('Wrong Email entered.');
            }else if(pass.value != sessionStorage.getItem('pass')){
                alert('Wrong Password entered.');
            }else{
                sessionStorage.setItem('loggedin', 'yes');
                window.location.replace('dashboard.html');
            }
        }
    }else{
        alert('Ok, please continue Sign on.');
    }
});

show.addEventListener('change', function(){
    if(show.checked){
        pass.type = 'text';
    }else{
        pass.type = 'password';
    }
});