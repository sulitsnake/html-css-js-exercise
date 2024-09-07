
const namebox = document.getElementById('namebox');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

const nameerror = document.getElementById('nameerror');
const emailerror = document.getElementById('emailerror');
const messageerror = document.getElementById('messageerror');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

/*Function for changing color every time a card is clicked*/
document.addEventListener('DOMContentLoaded', function () {

    function colorize() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)]; /*gets a random hex value*/
        }
        return color;
    }

    function randomize(card) {
        card.style.backgroundColor = colorize();
    }

    var r1 = document.getElementById('project1');
        r1.addEventListener('shown.bs.modal', function () {
        randomize(card1);
    });

    var r2 = document.getElementById('project2');
        r2.addEventListener('shown.bs.modal', function () {
        randomize(card2);
    });

    var r3 = document.getElementById('project3');
        r3.addEventListener('shown.bs.modal', function () {
        randomize(card3);
    });
});

/*form validation*/
 form.addEventListener('submit', (e)=>
{
    var email_check =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    if(namebox.value === '' || namebox.value == null)
    {
        e.preventDefault();
        nameerror.innerHTML = "Please enter a name!";
    } /*Makes name field required*/

   if(!email.value.match(email_check)) /*Email regex*/
    {
        e.preventDefault();
        emailerror.innerHTML = "Please enter a valid email";
    }

    if(message.value === '' || message.value == null)
        {
            e.preventDefault();
            messageerror.innerHTML = "Please input a message";
        } /*Makes message field required*/ 
        
        else if(message.value !='' && email.value != '' && namebox.value != ''){
            alert("Message sent, thank you!");
            location.reload();
        } /*should display an alert if all fields are filled*/
 })
