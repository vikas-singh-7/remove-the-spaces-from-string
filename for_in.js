const obj ={
    name:"vikas",
    frnd:"zara",
    game:"clashOfClans",
    game2:"PUBG"
};

console.log(obj.game);    // dot notation for objects

console.log(obj["game2"])    // square notationn for objects 

// lets iterte it
for(let key in obj){
    console.log(`${key} :->  ${obj[key]}`)      // means object["key"]  similar as key is  astring value so we dont need to add quotes heren
}


// for in for array

const programming=["javaScript","c","swift","python"];

for (let key in programming){
    console.log(`${key} :-> ${programming[key]}`)
};

