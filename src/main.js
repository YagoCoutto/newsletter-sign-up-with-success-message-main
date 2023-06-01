const email = document.querySelector('#input-email');
const button = document.querySelector('#submit');
const dismiss = document.querySelector('#dismiss');
const strong_email = document.querySelector('#strong-email');
const main = document.querySelector('main')
const sucess = document.querySelector('#success')





button.addEventListener("click", function(){

    function validationEmail(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email)
    }
    const validation = validationEmail(email.value)

    if(validation === true){
        main.style.display = 'none';
        sucess.style.display = 'flex';
        strong_email.innerHTML = email.value;

        email.style.border = '1px solid hsl(234, 29%, 20%)';
        email.style.color = 'hsl(234, 29%, 20%)';
        email.style.backgroundColor = "white";
    }else{
        email.style.border = '1px solid red';
        email.style.color = 'red';
        email.style.backgroundColor = "hsla(0, 100%, 64%, 0.452)";
    }

});
dismiss.addEventListener("click", function(){
    main.style.display = 'flex';
    sucess.style.display = 'none';
});


