console.log("Start");

function loginUser(email, password, callback){
    setTimeout(() => {
        userData = {userId: 592, status: "success"};
        console.log("Inside loginUser");
        callback(userData);
    }, 2000);
}

function getUserTweets(userID, callback){
    setTimeout(() => {
        tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
        console.log("Inside getUserTweets");
        callback(tweetData);
    }, 1000);
}

function getTweetComments(tweetId, callback){
    setTimeout(() => {
        commentData = [{commentId: 1, content: "Awesome!"}];
        console.log("Inside getTweetComments");
        callback(commentData);
    }, 1000);
}

const data = loginUser("shubham@gmail.com", "random", (userData) => {
    getUserTweets(userData.userId, () => {
        getTweetComments(tweetData[0].tweetId, (commentData) => {
            console.log(commentData);
        });
    });
});

console.log("Finish");