
var car =
{
   Model :" Maruthi Suzuki",
   ManufaturedYear : "1999",
   customer :"suwaiba",
   printCardata: function()
   {
    console.log("Car model is"+ car.Model+"The car owner is " + car.customer);
   }
};
console.log(car.printCardata());