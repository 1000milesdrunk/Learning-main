function onFormSubmit(){
    
    let firstName=document.getElementById("firstName");
    let lastName=document.getElementById("lastName");
    let phone=document.getElementById("phone");
    let email=document.getElementById("email");
    let dob=document.getElementById("dob");
    
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

}