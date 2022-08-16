// step 1, add click and eventlistner with the submit button
document.getElementById('btn-submit').addEventListener('click',function() {
    //  step 2: get the email address input the feild
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    // step 3
     const passwordFeild = document.getElementById('user-password');
     const password = passwordFeild.value;
     console.log(email,password)
    //  step 4: it's danger
    if (email === 'poly69517@gmail.com' && password === 'poly5566') {
        window.location.href = 'bank.html';
    }
    else{
         alert('Tui password vula gesos, Toke ami teijjo sontan gosona korlum')
    }
})