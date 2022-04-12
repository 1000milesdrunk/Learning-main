function onFormSubmit(){
    var formdata=readFormData();
    insertNewRecord(formdata);
}

function readFormData(){
    var formdata={};
     formdata["name"]=document.getElementById("name").value;
     formdata["empno"]=document.getElementById("name").value;
     formdata["country"]=document.getElementById("name").value;
     formdata["age"]=document.getElementById("name").value;
     formdata["phone"]=document.getElementById("name").value;
     formdata["email"]=document.getElementById("name").value;
     formdata["aadhar"]=document.getElementById("name").value;
     formdata["pancard"]=document.getElementById("name").value;
     formdata["bankacc"]=document.getElementById("name").value;
}

function insertNewRecord(data){
      var table=document.getElementById("registrationList").getElementsByTagName('tbody')[0];
      var newrow=table.insertRow(table.length);
      cell1=newrow.insertCell(0);
      cell1.innerHTML=data.name;
      cell2=newrow.insertCell(1);
      cell2.innerHTML=data.empno;
      cell3=newrow.insertCell(2);
      cell3.innerHTML=data.country;
      cell4=newrow.insertCell(3);
      cell4.innerHTML=data.age;
      cell5=newrow.insertCell(4);
      cell5.innerHTML=data.phone;
      cell6=newrow.insertCell(5);
      cell6.innerHTML=data.email;
      cell7=newrow.insertCell(6);
      cell7.innerHTML=data.aadhar;
      cell8=newrow.insertCell(7);
      cell8.innerHTML=data.pancard;
      cell9=newrow.insertCell(8);
      cell9.innerHTML=data.bankacc;
      cell10=newrow.insertCell(9);
      cell10.innerHTML=`<a>Edit</a>
                        <a>Delete</a>`;
}