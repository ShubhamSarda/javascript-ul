console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userData = {userId: 592, status: "success"};
            console.log("Inside loginUser");
            resolve(userData);
        }, 200);
    }); 
}

function getUserTweets(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
        }, 200);
    });
}

function getTweetComments(tweetId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commentData = [{commentId: 1, content: "Awesome!"}];
            console.log("Inside getTweetComments");
            resolve(commentData);
        }, 200);
    });
}

loginUser("shubham@gmail.com", "random")
    .then(userData => getUserTweets(userData.userId))
    .then(tweetData => getTweetComments(tweetData[0].tweetId))
    .then(commentData => console.log(commentData))
    .catch(error => console.log(error));

console.log("Finish");