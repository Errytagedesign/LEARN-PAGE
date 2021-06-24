// Declare all variables
const form = document.getElementById("form")
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const PhoneNumber = document.getElementById("number");
const email = document.getElementById("email");
const createPassword = document.querySelector("#password1");
const confirmPassword = document.querySelector("#password2");
const togglePassword = document.querySelector('.togglePassword');



// Password reveal
togglePassword.addEventListener('click', (e) => {
    

     // toggle the type attribute for create password
     const type = createPassword.getAttribute('type') === 'password' ? 'text' : 'password';
     createPassword.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
  });
  

  togglePassword.addEventListener('click', (e) => {
    

     // toggle the type attribute for confirm password

     const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
     confirmPassword.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
  });
  


// clear default action of submit form
form.addEventListener('submit', function(e) {

    e.preventDefault();

    // declare checkinput function
    checkInput();

});



// declaring checkinput function
    async function checkInput()  {

        const firstnameValue = firstname.value
        const lastnameValue = lastname.value
        const phonenumberValue  = number.value
        const emailValue = email.value
        const password1Value = password1.value
        const password2Value = password2.value

        if(firstnameValue === ''){

            await setErrorFor(firstname, 'Name cannot be blank');
        } else {

            await setSuccessFor(firstname);
        }

        if(lastnameValue === ''){

            await setErrorFor(lastname, 'Name cannot be blank');
        } else {

            await setSuccessFor(lastname);
        }

        if(phonenumberValue === ''){

            await setErrorFor(number, 'Number cannot be blank');
        } else {

            await setSuccessFor(number);
        }

        if(emailValue === ''){

            await setErrorFor(email, 'Email cannot be blank');
        } else {

            await setSuccessFor(email);
        }

        if(password1Value === ''){

            await setErrorFor(password1, 'Password cannot be blank');
        } 
        else if(password1Value.length <6 ){

            await setErrorFor(password1, 'Password is less than 8 characters')
        } else {

            await setSuccessFor(password1);
        }

        if(password2Value === ''){

            await setErrorFor(password2, 'Password cannot be blank');

        } else if(password1Value < password2Value || password1Value !== password2Value){

            await setErrorFor(password2, 'Password does not match')
            
        } else {

            await setSuccessFor(password2);
        }

        
        
    };


    // declaring input and sucess or error message function

    function setErrorFor(input, message){

        const formContainer = input.parentElement;
        const small = formContainer.querySelector('small');
        
        // add error message
        formContainer.className = 'form-container error';
        small.innerText = message;

        
    };


    function setSuccessFor(input){

        const formContainer = input.parentElement;
        formContainer.className = 'form-container success'
    }



    // create a function to submit a form

     const submitForm = async (req, res) => {
        const query = 'https://stocka-demo.herokuapp.com/api/v1/auth/register'  
        
        const data = checkInput()
        
        // /search?q=apple  |  /search?q=US5949181045
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then(response => {
            // console.log("symbol lookup returned", response.data)
            const symbollookup  = !lodash.isEmpty(response.data) ? (res.status(200).json({
                data: response.data
            })) : (res.status(500).json({
                error: 'Whoops! Call houston.'
            }))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>