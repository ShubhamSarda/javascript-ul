const form = document.querySelector(".add");

form.addEventListener("submit", event => {
    event.preventDefault();
    const transaction = {
        source: form.source.value,
        amount: form.amount.value
    };
    localStorage.setItem("transaction", JSON.stringify(transaction));
})