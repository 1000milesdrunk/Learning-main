var userArray = [];

function init(){
    if(localStorage.userDetails)
    {
        userArray=JSON.parse(localStorage.userDetails);
        for(var i=0;i<userArray.length;i++){
            var firstName=userArray[i].firstname;
            var lastName=userArray[i].lastname;
            var phone=userArray[i].phone;
            var email=userArray[i].email;
            var country=userArray[i].country;
            prepareTableCell(i,firstName,lastName,phone,email,country);
            //can do it in a single line by directly using it
            // prepareTableCell(userArray[i].firstname,userArray[i].lastname,userArray[i].phone,userArray[i].email,userArray[i].country);
        }
    }
}

function onRegisterPressed(){
    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var country=document.getElementById("country").value;

    var userObj={firstname:firstName,lastname:lastName,phone:phone,email:email,country:country};

    userArray.push(userObj);

    // console.log(userArray);

    localStorage.userDetails=JSON.stringify(userArray);

    prepareTableCell(firstName,lastName,phone,email,country);
        
    //clear fields
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    
}

function deleteTableRow(index){
    var table=document.getElementById("regtable");
    table.deleteRow(index);
}

function prepareTableCell(index,firstName,lastName,phone,email,country){
    if(lastName!==""){

        var table=document.getElementById("regtable");
        var row=table.insertRow();
        var firstNameCell=row.insertCell(0);
        var lastNameCell=row.insertCell(1);
        var phoneCell=row.insertCell(2);
        var emailCell=row.insertCell(3);
        var countryCell=row.insertCell(4);
        var actionCell=row.insertCell(5);
        firstNameCell.innerHTML=firstName;
        lastNameCell.innerHTML=lastName;
        phoneCell.innerHTML=phone;
        emailCell.innerHTML=email;
        countryCell.innerHTML=country;
        actionCell.innerHTML='<button>Edit</button><br/><button onclick="deleteTableRow('+index+')">Delete</button>';
    }
    else{
        var table=document.getElementById("regtable");
        var row=table.insertRow();
        var firstNameCell=row.insertCell(0);
        var phoneCell=row.insertCell(1);
        var emailCell=row.insertCell(2);
        var countryCell=row.insertCell(3);
        var actionCell=row.insertCell(5);
        
        firstNameCell.innerHTML=firstName;
        firstNameCell.colSpan=2;
        phoneCell.innerHTML=phone;
        emailCell.innerHTML=email;
        countryCell.innerHTML=country;
        actionCell.innerHTML='<button>Edit</button><br/><button onclick="deleteTableRow()">Delete</button>';
    }
}