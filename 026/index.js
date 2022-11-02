let ratings = [7, 8, 0, 3, 0, 6, 10, 7, 8];

for(let i = 0; i < ratings.length; i++){
    
    if(ratings[i] == 0){
        console.log(`About to skipppp! - ${ratings[i]}`);
        continue;
        console.log(`Rating: ${ratings[i]} - SKIP`);
    }

    if(ratings[i] == 10){
        console.log(`About to breakkkk! - ${ratings[i]}`);
        break;
        console.log(`Rating: ${ratings[i]} - MUST WATCH`);
    }

    console.log(`Rating: ${ratings[i]}`);
}

console.log("Out of loop!")