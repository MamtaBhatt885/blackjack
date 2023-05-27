//document.getElementById("count-el").innerText = 5

//  let firstBatch=5;
// let secondBatch=7;

// let count = firstBatch+secondBatch;   

// console.log(count);

//  let myAge=21;
//  console.log(myAge);

//initialize the count as 0
//listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count.

// function increment(){
//     console.log("The button was clciked");
// }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countdown();


// countdown(); 

// function count(){
//     console.log(42);
// }

// count();

// function tot_lap(){
//  let lap1=34;
//  let lap2=33;
//  let lap3=36;

//  let total=lap1+lap2+lap3;
//  console.log(total);
// }
// tot_lap();
// let lapsCompleted=0;
// function  laps(){
 
//     lapsCompleted= lapsCompleted+1;
     

// }
// laps();
// laps();
// laps();
// console.log(lapsCompleted);

let countEl= document.getElementById("count-el");
console.log(countEl);

let saveEl=document.getElementById("save-el");

count=0;
function increment(){
    count+=+1;
    countEl.innerText=count
     
}
increment();

// function decrement(){
//     count=count-1;
//     countEl.innerText=count;
// }

function save(){
    let st = count +" - "
    saveEl.textContent +=st;
    countEl.textContent=0;
}
save();


// let username="per"
// console.log(username);

// let message="You have three new notifications."
// console.log(message);
 
// let name="Mamta";
// let greeting="Hi, my name is";

// let myGreeting = greeting +" "+ name  ;
// console.log(myGreeting); 

