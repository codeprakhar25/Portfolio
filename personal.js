console.log("welcome to my portfolio website ")
const bttn=document.querySelector('.btn')
const cont=document.querySelector('.container')
document.querySelector('.container').style.display='none';
document.querySelector('#ham').addEventListener("click" ,()=>{
    document.querySelector('.container').style.display='inline';
    
})
document.querySelector('#cross').addEventListener("click" ,()=>{
    cont.style.display = 'none';
})
document.querySelector('#btn').addEventListener("click" ,()=>{
       alert('your form has been submitted');
})
