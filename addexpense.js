function filterOption(arr) {
    const selectCategory = document.getElementById("selectCategory");
    const arryMap = arr.map((e) => {
        const option = document.createElement("option");
        option.innerHTML = e;
        selectCategory.append(option);
    });
}
const saveExpense = document.getElementById("expense");
const inComeOption = ["ხელფასი", "ბონუსი", "ჩარიცხვა", "ნასესხები"];
saveExpense.addEventListener("change", (e) => {
    e.preventDefault;
    selectCategory.length = 0;
    filterOption(inComeOption);
});
const saveIncome = document.getElementById("income");
const expenseOption = ["კვება", "მარკეტი", "სამედიცინო", "ჯარიმა"];
saveIncome.addEventListener("change", (e) => {
    e.preventDefault;
    selectCategory.length = 0;
    filterOption(expenseOption);
});

const form = document.getElementById("form");
const userPosts = [];
function validFormValue(form1) {
    if (
        form1.data1.value !== "" &&
        (form1.type[0].checked === true || form1.type[1].checked === true) &&
        form1.money.value !== ""
    ) {
        const userPost = {};
        userPost["id"] = userPosts.length + 1;
        userPost["data"] = form1.data1.value;
        userPost["category"] = form1.category.value;
        if (form1.type[0].checked) {
            userPost["type"] = "შემოსავალი";
        } else {
            userPost["type"] = "გასავალი";
        }
        userPost["money"] = +form1.money.value;
        userPosts.push(userPost);
        console.log("ვალიდაცია გავლილია", userPosts);

        saveExpenses(userPost);
        userPost.length = 0;
        console.log(userPost, "userPost");
    } else {
        alert("შეავსეთ ყველა ველი");
    }
}
const addExpenseBtn = document.getElementById("addExpenseBtn");
addExpenseBtn.addEventListener("click", (e) => {
    e.preventDefault;
    validFormValue(form);
});

const addListBtn = document
    .getElementById("addListBtn")
    .addEventListener("click", (e) => e.preventDefault);

const saveExpenses = (expense, storageKey = "expenses") => {
    const exisiting_expenses = localStorage.getItem(storageKey);

    if (exisiting_expenses === null) {
        const expenses = [expense];
        localStorage.setItem(storageKey, JSON.stringify(expenses));
    } else {
        const expenses_parsed = JSON.parse(exisiting_expenses);
        expenses_parsed.push(expense);
        localStorage.setItem(storageKey, JSON.stringify(expenses_parsed));
    }
};
