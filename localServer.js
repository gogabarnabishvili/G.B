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
// export { userexpenses };
export default userexpenses;
// userexpenses;
