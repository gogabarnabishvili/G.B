const backExpenses = (strogekey = "expenses") => {
    const exisitingExpenses = localStorage.getItem(strogekey);
    if (exisitingExpenses !== null) {
        const exisitingParsed = JSON.parse(exisitingExpenses);
        return exisitingParsed;
    } else {
        alert("თქვენ არ გიფიქსირდებათ ტრანზაქციები");
    }
};

const userexpenses = backExpenses();
console.log(userexpenses[0].id);

// console.log(backExpenses().length);

function expensesReding(arry) {
    arry.map((e) => {
        console.log(e.data);
    });
}
expensesReding(userexpenses);
