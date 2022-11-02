let score = 70;

if(score < 80){
    let in80 = 80;
    console.log("Inside < 80 Block", score, in80);

    if(score > 65){
        let in65 = 65;
        console.log("Inside > 65 Block", score, in80, in65);
    }
}

console.log("Inside Global Block", score);