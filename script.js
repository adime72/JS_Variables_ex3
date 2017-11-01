


// Creating an array with values
var nmbrs = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];  


console.log(nmbrs.length);
console.log(nmbrs[0,2,5]); 


nmbrs.splice(8, 2);  // will remove the 2 last items
console.log(nmbrs); 

var mixAlefnum = [1, "אחת", 2, "שתיים", 3, "שלוש", 5, "חמש", 8, "שמונה"]; 
console.log(mixAlefnum); 


//task 7 in ex3
var studentsme =[{
  eyes: "blue",
  name: "Adi",
  hight: 176,
  }, 
  {
    eyes: "brown",
    name: "Noam",
    hight: 178,
    },
    {
      eyes: "blue",
      name: "Marina",
      hight: 168,
      },
      {
        eyes: "green",
        name: "Hen",
        hight: 165,
        },
        {
          eyes: "brown",
          name: "Alex",
          hight: 173,
          },
          {
            eyes: "black",
            name: "Michal",
            hight: 165,
            }
];

console.log(JSON.stringify(studentsme));

studentsme.shift();
console.log(studentsme);
studentsme.unshift({
  eyes: "brown",
  name: "Nir",
  hight: 173,
  });       // Adding to the start
console.log(studentsme);
//The switch
studentsme.splice(0, 1);  // will remove the first item
//Adding the new object
var face = {
  eyes: "greenish"};
  studentsme.unshift(face);       // Adding to the start
  console.log(studentsme); 
