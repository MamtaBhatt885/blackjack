let age=15

if(age<6)
{
    console.log("free");
}
else if(age>=6 && age<=17){
    console.log("Child discount");
}
else if(age>=18 &&age<=26){
    console.log("Student discount")
}
else if(age>=27 && age <=66){
    console.log("full price");
}
else(age>66)    
{ console.log("Senior citizen discount")
}