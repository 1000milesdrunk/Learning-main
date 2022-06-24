function addUser(){
  let formData = document.getElementById("inputForm");
  console.log(formData)
  let userDetails=formData.querySelectorAll("input");
  console.log(userDetails);
  for(let i=0;i<userDetails.length;i++){
    if(userDetails[0].value=="")
  }
  let name=userDetails[0].value;
  let age=userDetails[1].value;
  let email=userDetails[2].value;
  let phone=userDetails[3].value;
  
 $.post("addUser",{name:name,age:age,email:email,phone:phone},function(response){$("body").html(response)}); 
}