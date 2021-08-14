const goBtn = document.getElementById('go');
const accountType = document.getElementById("account-type");
//var container = document.getElementById("container");

// create user object
var User = {
    type: "user",
    user_permission: "save"
}

// create Moderator object which inhert User object

var Moderator = Object.create(User,{
    type: {
        value: "moderator",
    },
    moderate_permission: {
        value: "edit"
        }
});


// create Amin object which inhert  Moderator object

var Admin = Object.create(Moderator,{
    type: {
        value: "admin",
    },
    admin_permission: {
        value: "delete"
        }
});




goBtn.addEventListener('click',()=>{
    if(document.getElementById("userSelect").checked){
        accountType.innerHTML= User.user_permission;
    }
    if(document.getElementById("moderateSelect").checked){
        accountType.innerHTML= Moderator.moderate_permission + ' and ' + Moderator.user_permission;
    }
    if(document.getElementById("adminSelect").checked){
        accountType.innerHTML= Admin.user_permission + ' and ' + Admin.moderate_permission + ' and ' + Admin.admin_permission;
    }
});












































/*
const myName = document.querySelector('.Name1');
const btn1 = document.getElementById('changeColor');
const btn = document.getElementById('changeText');
const re = document.getElementById('re');



btn.addEventListener('click',()=>{
    myName.classList.remove('color1');
});


btn1.addEventListener('click',()=>{
    myName.classList.add("color1");
});



goBtn.addEventListener('click',function(){
    window.location.href = 'home.html';
    re.innerHTML = "I am from page 1";
});



*/














