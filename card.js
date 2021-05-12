const input =document.querySelector('.card-number input');
const ctContainer = document.querySelector('.ct-container');
const master = document.querySelector('.master');
const verve = document.querySelector('.verve');
const visa = document.querySelector('.visa');
input.addEventListener("keyup" , (c)=>{
  const value =c.target.value;
  const number = value;

if (number[0]==='5' && number.length < 17) {
    ctContainer.style.display= 'inline-block'
    verve.style.display  = 'none';
    // visa.style.display = 'none'
    
}
else if (number[0] === '5' && number.length > 17){
    ctContainer.style.display = 'inline-block';
    verve.style.display= 'inline-block';
    console.log('hi');
}
else if (number[0]==='4'){
    ctContainer.style.display = 'inline-block';
    master.style.display = 'none';
    verve.style.display = 'none';

}
else{
    ctContainer.style.display = 'none';
    master.style.display = 'inline-block'
    verve.style.display = 'inline-block';

}
        
})

