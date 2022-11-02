const form = document.querySelector(".add");
let transactions = localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")) : [];

form.addEventListener("submit", event => {
    event.preventDefault();
    const time = new Date();
    const transaction = {
        id: Math.floor(Math.random()*100000),
        source: form.source.value,
        amount: form.amount.value,
        time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
    };
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
})