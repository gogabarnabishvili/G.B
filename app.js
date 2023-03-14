const backExpenses = (strogekey = "expenses") => {
    const exisitingExpenses = localStorage.getItem(strogekey);
    if (exisitingExpenses !== null) {
        const exisitingParsed = JSON.parse(exisitingExpenses);
        return exisitingParsed;
    } else {
    }
};

const userexpenses = backExpenses();

const wraper = document.querySelector(".wraper");
const form = document.getElementById("renderForm");

const renderUsers = (arr) => {
    wraper.innerHTML = "";
    arr.map((e) => {
        const smollBox = document.createElement("div");
        smollBox.classList = "smollBox";
        function eType(type) {
            smollBox.innerHTML = `

                <p>თარიღი : ${e.data}</p>
                <p>კატეგორია : ${e.category}</p>
                <p>თანხა : ${e.money}</p>
                <p>${type}</p>
                
                <div class="btnAndMar">
                <button>x</button>
                <input type="checkbox" name="mark" id="mark" />
            </div>

            `;
        }

        if (e.type === "income") {
            eType("შემოსავალი");
        } else {
            eType("გასავალი");
        }
        wraper.append(smollBox);
    });
};

renderUsers(userexpenses);

const expense2 = document.getElementById("expense2");
const income2 = document.getElementById("income2");
const maxMoneyLabel = document.getElementById("maxMoneyLabel");
const minMoneyLabel = document.getElementById("minMoneyLabel");
const filtter = document.getElementById("filtter");
const renderForm = document.getElementById("renderForm");

// const data1 = renderForm.data.value;
// const income = income2.value;
// const expenses = expense2.value;
// const minMoney = minMoneyLabel.value;
// const maxMoney = maxMoneyLabel.value;

// function validFilter(postarr) {
//     postarr.map((e) => {
//         if (
//             (renderForm.data.value === e.data ||
//                 renderForm.data.value === "") &&
//             (income === e.category ||
//                 expenses === e.category ||
//                 income === "" ||
//                 expenses === "") &&
//             (minMoney >= e.money ||
//                 maxMoney <= e.money ||
//                 minMoney === "" ||
//                 maxMoney === "")
//         ) {
//             console.log("rame");
//         } else {
//             console.log(renderForm.data.value === e.data);
//         }
//     });
// }

// console.log(renderForm.data.value);
// console.log(filtter);
const newArryUser = [];
filtter.addEventListener("click", () => {
    newArryUser.length = 0;
    userexpenses.map((e) => {
        if (
            e.data === renderForm.data.value ||
            (renderForm.data.value === "" &&
                (e.category === income2.value || income2.value === "")) ||
            e.category === expense2.value ||
            (expense2.value === "" && e.money <= renderForm.maxMoney.value) ||
            (renderForm.maxMoney.value === "" &&
                e.money >= renderForm.minMoney.value) ||
            renderForm.minMoney.value === ""
        ) {
            newArryUser.push(e);
            renderUsers(newArryUser);
            console.log(e.category);
        } else {
            console.log("rame");
        }
    });
});

// render option need export

function filterOption(arr, append) {
    const arryMap = arr.map((e) => {
        const option = document.createElement("option");
        option.className = "option";
        option.innerHTML = e;
        append.append(option);
    });
}

const inComeOption = ["ხელფასი", "ბონუსი", "ჩარიცხვა", "ნასესხები"];
const expenseOption = ["კვება", "მარკეტი", "სამედიცინო", "ჯარიმა"];
filterOption(expenseOption, expense2);
filterOption(inComeOption, income2);
