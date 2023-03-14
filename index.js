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

const backExpenses = (strogekey = "user") => {
    const exisitingExpenses = localStorage.getItem(strogekey);
    if (exisitingExpenses !== null) {
        const exisitingParsed = JSON.parse(exisitingExpenses);
        return exisitingParsed;
    } else {
        alert("თქვენ არ გიფიქსირდებათ ტრანზაქციები");
    }
};
backExpenses("user");
const userBack = backExpenses("user");
const signIn = document.getElementById("signIn");
const validValiu = document.getElementById("iAgree");
function backValiu(kay) {
    kay.map((e) => {
        if (kay) {
            inForm.name.value = e.name;
            inForm.password.value = e.password;
        } else {
            console.log("false");
        }
    });
}
validValiu.addEventListener("change", () => {
    backValiu(userBack);
});

function userInfoSend() {
    signIn2.addEventListener("click", () => {
        if (
            regForm["name2"].value !== "" &&
            regForm["password2"].value !== "" &&
            regForm["password2Re"].value === regForm["password2"].value &&
            regForm["email"].value !== ""
        ) {
            users["name"] = regForm["name2"].value;
            users["password"] = regForm["password2Re"].value;
            users["email"] = regForm["email"].value;
            saveExpenses(users);
            signIn2.style.backgroundColor = "green";
            signIn2.value = "გავლილია ვალიდაცია";
        } else {
        }
    });
}
userInfoSend();

const usersBack = localStorage.getItem("user");
const parseUsers = JSON.parse(usersBack);

validValiu.addEventListener("change", (e) => {});
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
                }
            });
        } else {
        }
    });
}
validForm();
