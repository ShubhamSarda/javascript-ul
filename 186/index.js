console.log("Start");

const twitterProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {twitterUserID: 592, status: "success"};
        console.log("Inside twitterProfile");
        resolve(userData);
    }, 5000);
});

const instagramProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {InstagramUserID: 782, status: "success"};
        console.log("Inside instagramProfile");
        resolve(userData);
    }, 1000);
});

Promise.all([twitterProfile, instagramProfile])
    .then(data => console.log(data));

console.log("Finish");