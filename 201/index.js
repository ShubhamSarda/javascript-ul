console.log("Step 1");

function completed(){
    console.log("Weather Task Completed!");
}

try {
    getWeatherReport();
} catch (error) {
    console.log(error);
} finally {
    completed();
}

console.log("Step 2");