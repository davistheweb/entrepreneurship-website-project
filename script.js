let disp = document.querySelector('#disp');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
// let cpass = document.querySelector('#cpass');
let show = document.querySelector('#show');



let btn = document.querySelector('#btn');
email.addEventListener('keyup', function(){
    // disp.innerHTML = email.value;
});
pass.addEventListener('keydown', function(){
    // alert(pass.value);
});
show.addEventListener('change', function(){
    if(show.checked){
        pass.type = 'text';
        cpass.type = 'text';
    }else{
        pass.type = 'password';
        cpass.type = 'password';
    }
});
btn.addEventListener('click', function(){

    // if(respons == true){
        if(email.value == ''){
            email.style.borderColor = "red";
            email.setAttribute("autofocus","autofocus");
            email.title = "Please Fill up this field";
            alert("Please Fill up this field");
            
        }else if(pass.value == ''){
            pass.style.borderColor = "red";
            pass.setAttribute("autofocus","autofocus");
            alert("Please Fill up this field");
            
        }else if(cpass.value == ''){
            cpass.style.borderColor = "red";
            cpass.setAttribute("autofocus","autofocus");
            // cpass.title = "Please Fill up this field";
            alert("Please Fill up this field");

        }else if(pass.value != cpass.value){
            pass.style.borderColor = "red";
            cpass.style.borderColor = "red";
            alert("Incorrect password");
        
        }if(pass.value === cpass.value && cpass.value != '' && pass.value != ''&& email.value != ''){
            window.location=['about.html']
            // alert('Are you sure you wish to submit ?')
        }
    //     else{
    //         let respons = confirm('Are you sure you wish to submit ?');

    // }
});

let s = 15;
looper();
function looper(){
    // disp.innerHTML = 'am working s = ' + s;
    setTimeout(function(){
        if(s == 0){
            clearTimeout;
        }else{
            if(s <= 5){
                disp.classList.add('timeUP');
                disp.classList.remove('showTime');
                disp.classList.add('hideTime');
                setTimeout(function(){
                    disp.classList.remove('hideTime');
                    disp.classList.add('showTime');
                }, 400);
                disp.classList.toggle('centerTime');
            }
            s--;
            looper();
        }
    }, 1000);
}