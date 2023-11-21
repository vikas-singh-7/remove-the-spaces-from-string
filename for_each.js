// a special loop for arraus only

const frnd =["zara","kulu","vishu","shatrujeet"];

console.log(frnd);

// lets itertste over it by for each loop

frnd.forEach(test);

function test(name){
    console.log(name)
};



const details = [
    {
        mobile:"iqoo",
        price:70000
    },
    {
        mobile:"apple",
        price:170000
    },
    {
        mobile:"sangmang",
        price:2400
    }
];

console.log(details);



details.forEach( (item)=>{

    console.log(item.mobile)

});


const myfavs=[
    {name:"zara",
age:22,
game:"clashOfClans"},
{
    name:"kulu",
    age:21,
    game:"pubgmobile"
},
{
    name:"vishu",
    age:22,
    game:"bgmi"
}
];

// console.log(myfavs)



myfavs.forEach( (item)=>{
    console.log(item.name , item.age , item.game)
})
