  function formdata(){
    let name=document.getElementById("name").value;
    console.log(name)
    let empno=document.getElementById("empno").value;
    console.log(empno)
    let country=document.getElementById("country").value;
    console.log(country)
    let age=document.getElementById("age").value;
    console.log(age);
    let phone=document.getElementById("phone").value;
    console.log(phone);
    let email=document.getElementById("email").value;
    console.log(email);
    let aadhar=document.getElementById("aadhar").value;
    console.log(aadhar);
    console.log("form data")
    localStorage.setItem("name",name);
    localStorage.setItem("empno",empno);
    localStorage.setItem("country",country);
    localStorage.setItem("age",age);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);
    localStorage.setItem("aadhar",aadhar);
    
} 