// question   remove the spaces between the strings and print the string using loop

const name = "hey its me javaScript";

// now we have three spaces 

// lets itertate through it by skipping space

for(const space of name){

    if(space===" "){
        continue;
    }

    console.log(space) 
}