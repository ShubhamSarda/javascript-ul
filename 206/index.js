// const old = new Date('May 10, 2022 03:24:00');
// const old = new Date(2022, 4, 10);

const old = new Date(1652121120050);
console.log(old);
console.log(old.getTime());


const now = new Date();
console.log(now);
console.log(now.getTime());


const gap = now - old;
const timeInformation = Math.round(gap/1000/60/60/24)
console.log(`Blog was posted ${timeInformation} days ago!`);