const inForm = document.getElementById("inForm");
const regForm = document.getElementById("regForm");
const signInBn = document.querySelectorAll(".signInReg");

function displayNOne(item) {
    const btnArr = item.forEach((element) => {
        element.addEventListener("click", (e) => {
            inForm.classList.toggle("displayNone");
            regForm.classList.toggle("displayNone");
            return;
        });
    });
}
displayNOne(signInBn);

const signIn2 = document.getElementById("signIn2");
const users = {};
const saveExpenses = (expense, storageKey = "user") => {
    const exisiting_expenses = localStorage.getItem(storageKey);

    if (exisiting_expenses === null) {
        const user = [expense];
        localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
        const expenses_parsed = JSON.parse(exisiting_expenses);

        expenses_parsed.filter((e) => {
            if (e.email !== users.email) {
                expenses_parsed.push(expense);
                localStorage.setItem(
                    storageKey,
                    JSON.stringify(expenses_parsed)
                );
            }
        });
    }
};

function userInfoSend() {
    signIn2.addEventListener("click", () => {
        if (
            regForm["name2"].value !== "" &&
            regForm["password2Re"].value !== "" &&
            regForm["password2Re"].value !== "" &&
            regForm["email"].value !== ""
        ) {
            users["name"] = regForm["name2"].value;
            users["password"] = regForm["password2Re"].value;
            users["email"] = regForm["email"].value;
            saveExpenses(users);
        } else {
            console.log("errtor");
        }
    });
}
userInfoSend();
const signIn = document.getElementById("signIn");

const usersBack = localStorage.getItem("user");
const parseUsers = JSON.parse(usersBack);

function validForm() {
    signIn.addEventListener("click", (el) => {
        // el.preventDefault;
        const usersBack = localStorage.getItem("user");
        const parseUsers = JSON.parse(usersBack);
        if (usersBack !== null) {
            const parseUsers = JSON.parse(usersBack);
            parseUsers.filter((e) => {
                if (
                    inForm.name.value === e.name &&
                    inForm.password.value === e.password
                ) {
                    const signInLink = (document.getElementById(
                        "signInLink"
                    ).href = "app.html");
                } else {
                    // displayNOne(signInBn);
                    // alert("გთხოვთ გაიაროთ რეგისტრაცია");
                }
            });
        } else {
            alert("გაიარეთ რეგისტრაცა");
        }
        // if(signIn.name.value === )
    });
}
validForm();
