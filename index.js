let phoneNumber = document.getElementById("phoneNumber")
let emailInput = document.getElementById("emailInput")
let englishInput = document.getElementById("englishInput")
let maleGenderSelect = document.getElementById("maleGenderSelect")
let femaleGenderSelect = document.getElementById("femaleGenderSelect")
let Gender = "other"
let bday = document.getElementById("bday")
let education = document.getElementById("eduStatus")
const submitBtn = document.getElementById("submitBtn")

let isValid = true //dy 27na 7atenha 3ashan law false, el if statement matet3mlsh
///we khalenha enha variable momken yet3del 

//hanghyar el submitBtn.onclick le form.addEventListener
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent submission until validated
    
    isValid = true;  
    if(!phoneNumber.value){
        window.alert("Please enter a phone Number")
        isValid = false
    }
    else{
        //dy hat3ml replace lel non digits replace(/\D/g, '') 3ashan el rakam mayb2ash fy 7orof
        const phone = phoneNumber.value.trim().replace(/\D/g, '')
        if(phone.length !=11 || !phone.startsWith("01")){
            window.alert("Invalid Phone Number, Try entering a correct Number")
            isValid = false
        }
    }
    if(!englishInput.value){
        window.alert("Please Enter Your Name")
        isValid = false
    }
    //3ashan ne3ml check en el esm mafyhosh la rakam aw symbol
    else if(!/^[a-zA-Z\s]+$/.test(englishInput.value.trim())){
        window.alert("Name must contain only English letters and spaces (no numbers/symbols).");
        isValid = false
    }
    if(!emailInput.value){
        window.alert("Please Enter your Email")
        isValid = false
    }
    //3ashan neshof law el email el maktob sah wala la2
    else if(!emailInput.value.includes("@") || !emailInput.value.includes(".com")){
        window.alert("Invalid Email, Please Enter a valid email")
        isValid = false
    }
    if(!maleGenderSelect.value || !femaleGenderSelect.value){
        window.alert("Please Select Your Gender")
        isValid = false
    }
    else if(maleGenderSelect.checked){
        Gender = "Male"
    }
    else if(femaleGenderSelect.checked){
        Gender = "Female"
    }
    if(!bday){
        window.alert("Please Insert Your birthday")
    }
    if(!education){
        window.alert("Please Insert Your Education Status")
    }
    if(isValid){
        form.submit(); //to submit the form correctly
        window.alert("Form Submitted Successfully!");
        englishInput.value = '';
        phoneNumber.value = '';
        emailInput.value = '';
        bday.value = ''
    }
    else{
        window.alert("Please Enter each field correctly")
    }
})