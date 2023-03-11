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

const wraper = document.querySelector(".wraper");
const form = document.getElementById("renderForm");

//function for render array which is filtered or not;
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

// dadaw
const filtter = document.getElementById("filtter");
const renderForm = document.getElementById("renderForm");

filtter.addEventListener("click", (e) => {
    e.preventDefault();

    const dataForRender = (arrr) => {
        arrr.filter((e) => {
            if (
                (renderForm.data.value !== e.data ||
                    renderForm.data.value === "") &&
                (renderForm.categori.value !== e.category ||
                    renderForm.categori.value === "") &&
                (renderForm.money.value !== e.money ||
                    renderForm.money.value === "")
            ) {
                alert("არ მოიძებნა ოპერაცია");
            } else {
                console.log(arrr);
                renderUsers(arrr);
                console.log("aq modis");
            }
        });
    };
    dataForRender(userexpenses);
});

console.log(userexpenses);
function backMoney(type, arr) {
    return arr.filter((e) => e.type === type);
}

function arryReduce(arr) {
    return arr.reduce((acc, cur) => {
        let result = (acc += +cur.amount);

        return result;
    }, 0);
}
function moneyTotalTre(arr) {
    return arr.map((e) => {
        e.money;
        // console.log(e.money);
    });
}
function totalMoneyY(arr) {
    return arr.reduce((acc, cur) => {
        let result = acc - cur;
        return result;
    }, 0);
}
function moneyTotal(arr) {
    // console.log(arr);
    const incomeMoney = document.querySelector(".totalInfo");

    const incomeTotalArr = backMoney("income", arr);
    const expensTotalArr = backMoney("expense", arr);
    const moneyTotal2 = moneyTotalTre(arr);
    // console.log(moneyTotal2);

    const incomeTotal = arryReduce(incomeTotalArr);
    const expensTotal = arryReduce(expensTotalArr);
    const youTotal = totalMoneyY(moneyTotal2);
    console.log(moneyTotal(arr));
    incomeMoney.innerHTML = `
    <p>ჩარიცხვები <span> ${incomeTotal}</span></p>
    <p>ანგარიში <span> ${youTotal}</span></p>
    <p>ხარჯი <span> ${expensTotal}</span></p>
  
  `;
}

moneyTotal(userexpenses);
console.log(userexpenses);
// const wraper = document.querySelector(".wraper");
// function renderPosts(arr) {
//     expensesReding(userexpenses);
//     arr.map((e) => {
//         // console.log(e);
//         const smollBox = document.createElement("div");
//         smollBox.className = "smollBox";
//         const dataRender = document.createElement("p");
//         const categoryRender = document.createElement("p");
//         const moneyRender = document.createElement("p");
//         const incomeExRender = document.createElement("p");

//         dataRender.innerHTML = `თარიღი : ${e.data}`;
//         categoryRender.innerHTML = `კატეგორია : ${e.category}`;
//         moneyRender.innerHTML = `თანხა : ${e.money}`;
//         if (e.type === "შემოსავალი") {
//             incomeExRender.innerHTML = `${e.type}`;
//         } else {
//             incomeExRender.innerHTML = `${e.type}`;
//         }
//         wraper.append(smollBox);
//         smollBox.append(
//             dataRender,
//             categoryRender,
//             moneyRender,
//             incomeExRender
//         );
//     });
// }

// renderRecords(userexpenses);
// renderPosts(userlocals);

// const filtter = document.getElementById("filtter");
// const newUserArr = [];
// function filterForm(serchform) {
//     filtter.addEventListener("click", (e) => {
//         userexpenses.filter((e) => {
//             if (
//                 (serchform.data.value !== e.data ||
//                     serchform.data.value === "") &&
//                 (serchform.categori.value !== e.category ||
//                     serchform.categori.value === "") &&
//                 (serchform.money.value !== e.money ||
//                     serchform.money.value === "")
//             ) {
//                 alert("არ მოიძებნა ოპერაცია");
//             } else {
//                 newUserArr.map((el) => {
//                     if (e !== el) {
//                         newUserArr.push(e);
//                         renderRecords(newUserArr);
//                         console.log("no more");
//                     } else {
//                     }
//                 });

// renderPosts(userexpenses);
// for (let i = 0; userexpenses.length >= i; i++) {
//     if (e.data === userexpenses[i].data) {

//     }
// }
// }
//         });
//     });
// }
// renderPosts(userexpenses);
// filterForm(renderForm)
