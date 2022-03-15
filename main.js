
const inputValue = document.querySelector('.input__value');
const inputForm = document.querySelector('form');
const results = document.querySelector('.results h3');
const checkBtn = document.querySelector('.btn')
const checkerHeader = document.querySelector('.checker__header')


checkBtn.addEventListener('click', function(e){

  // program to check if a number is prime or not

  // get input value
  const number = Number(inputValue.value);
  let isPrime = true;

  // check for emptyness of a value
  if (!number){
    withoutNumber();
  }else{
    // check if number is equal to 1
    if (number === 1 || number < 1) {
    isNotPrime(number);
    }
    // check if number is greater than 1
    else if (number > 1) {
    // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
      }
      if (isPrime) {
        isPrimeNumber(number);
      } else {
        isNotPrime(number);
      }
    }
  };
  e.preventDefault();
});


// empyty imput
const withoutNumber = function (){
  results.textContent = 'Enter a number😞';

  checkerHeader.innerHTML = `
  Prime Number Checker 😞😞😞
  `

  // document.body.style.background ='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,75,121,1) 35%, rgba(0,212,255,1) 100%)';
      
  // checkBtn.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,75,121,1) 35%, rgba(0,212,255,1) 100%)';
};


// not prime number
const isNotPrime = function(numbers){

  results.textContent = `${numbers} is a not prime number 🤪`;
        
        checkerHeader.innerHTML = `
        Prime Number Checker 
        <span class="checker__icon">
        <lord-icon src="https://cdn.lordicon.com/spxnqpau.json" trigger="loop" style="width:60px;height:60px; color:white;"> </lord-icon>
        </span>
        🤪

        `

        // document.body.style.background ='linear-gradient(90deg, rgba(69,69,103,0.9808298319327731) 0%, rgba(5,68,66,0.8463760504201681) 35%, rgba(19,30,32,1) 100%)'

        // checkBtn.style.background = 'linear-gradient(90deg, rgba(69,69,103,0.9808298319327731) 0%, rgba(5,68,66,0.8463760504201681) 35%, rgba(19,30,32,1) 100%)';


};


// prime number
const isPrimeNumber = function(numbers){

  checkerHeader.innerHTML = `
  Prime Number Checker  
  <span class="checker__icon">
  <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" style="width:60px;height:60px"> </lord-icon>
  </span>

  `

 
  results.textContent = `${numbers} is a prime number 💯😃👌`


  // document.body.style.background ='linear-gradient(90deg, rgba(90,228,129,0.9808298319327731) 0%, rgba(71,121,93,0.8463760504201681) 37%, rgba(73,144,94,1) 72%, rgba(78,194,96,1) 100%)';


  // checkBtn.style.background = 'linear-gradient(90deg, rgba(90,228,129,0.9808298319327731) 0%, rgba(71,121,93,0.8463760504201681) 37%, rgba(73,144,94,1) 72%, rgba(78,194,96,1) 100%)';

}

