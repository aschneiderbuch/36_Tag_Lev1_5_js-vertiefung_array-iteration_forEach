console.log("test");


/* 

map
    wenn zahl durch 3     dann   + 100

    if

*/

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
  

  function durch3Teilbar(){

    checkNumber.map((element) =>{
        const body = document.querySelector("body");

        if(element %3 == 0){
            element = ` ${element + 100} durch 3 teilbar `;
        }
        else {element = element}
body.innerHTML += ` ${element} <br>`;
// body.innerHTML = `</br> ${checkNumber}`;
console.log(element);
    })


    console.table(checkNumber);
  };

  durch3Teilbar();