function init(){
    if(localStorage.firstname){
        document.getElementById("firstName").value=localStorage.firstname;
    }
    else{
        alert("Input not entered please check the input")
    }
}
function onFormSubmit(){
    tableLoading();
    localStorage.firstname=document.getElementById("firstname").value;
    localStorage.lastname=document.getElementById("lastname").value;
    localStorage.phoneNo=document.getElementById("phone").value;
    localStorage.emailId=document.getElementById("email").value;
    localStorage.dOB=document.getElementById("dob").value;
    // alert("Saved Successfully");
}

function tableLoading(){
    
    // if(document.getElementById("firstname").value===""){
    //     alert("enter the input");
    // }
    // else if(document.getElementById("lastname").value===""){
    //     alert("enter the input");
    // }
    // else if(document.getElementById("phone").value===""){
    //     alert("enter the input");
    // }
    // else if(document.getElementById("email").value===""){
    //     alert("enter the input");
    // }
    // else if(document.getElementById("dob").value===""){
    //     alert("enter the input");
    // }

    let firstName=document.getElementById("firstname").value;
    let lastName=document.getElementById("lastname").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let dob=document.getElementById("dob").value;
    // console.log(firstName);
    console.log(dob);

    var table=document.getElementById("tabledata");
    var row=table.insertRow();

    let firstNameCell=row.insertCell(0);
    let lastNameCell=row.insertCell(1);
    let phoneCell=row.insertCell(2);
    let emailCell=row.insertCell(3);
    let dobcell=row.insertCell(4);

    firstNameCell.innerHTML=firstName;
    lastNameCell.innerHTML=lastName;
    phoneCell.innerHTML=phone;
    emailCell.innerHTML=email;
    dobcell.innerHTML=dob;

    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("dob").value="";

}