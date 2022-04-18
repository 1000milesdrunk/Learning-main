function onRegisterPressed(){
    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var country=document.getElementById("country").value;

    if(lastName!==""){

        var table=document.getElementById("regtable");
        var row=table.insertRow();
        var firstNameCell=row.insertCell(0);
        var lastNameCell=row.insertCell(1);
        var phoneCell=row.insertCell(2);
        var emailCell=row.insertCell(3);
        var countryCell=row.insertCell(4);
        
        firstNameCell.innerHTML=firstName;
        lastNameCell.innerHTML=lastName;
        phoneCell.innerHTML=phone;
        emailCell.innerHTML=email;
        countryCell.innerHTML=country;
    }
    else{
        var table=document.getElementById("regtable");
        var row=table.insertRow();
        var firstNameCell=row.insertCell(0);
        var phoneCell=row.insertCell(1);
        var emailCell=row.insertCell(2);
        var countryCell=row.insertCell(3);
        
        firstNameCell.innerHTML=firstName;
        firstNameCell.colSpan=2;
        phoneCell.innerHTML=phone;
        emailCell.innerHTML=email;
        countryCell.innerHTML=country;
    }
        
    //clear fields
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    
}