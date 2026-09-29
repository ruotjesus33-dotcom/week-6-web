// SpendWise Interactive JavaScript

// ==========================================
// 1. APPLICATION DATA
// ==========================================

let budget = Number(prompt("Enter your total budget:"));

let expenses = [];


// ==========================================
// 2. FUNCTION TO CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses() {
    let total = 0;

    // Loop through every expense
    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// ==========================================
// 3. FUNCTION TO CALCULATE BALANCE
// ==========================================

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// ==========================================
// 4. FUNCTION TO UPDATE THE DASHBOARD
// ==========================================

function updateDashboard() {

    let totalExpenses = calculateTotalExpenses();

    let balance = calculateBalance(budget, totalExpenses);

    // Update budget
    document.getElementById("budgetDisplay").textContent = budget;

    // Update total expenses
    document.getElementById("expenseDisplay").textContent = totalExpenses;

    // Update remaining balance
    document.getElementById("balanceDisplay").textContent = balance;


    // ==========================================
    // 5. DECISION MAKING
    // ==========================================

    let message = document.getElementById("budgetMessage");

    if (balance > 0) {
        message.textContent = "You are within your budget.";
    } else if (balance === 0) {
        message.textContent = "You have used your entire budget.";
    } else {
        message.textContent = "Warning: You have exceeded your budget.";
    }


    // ==========================================
    // 6. DISPLAY EXPENSES USING A LOOP
    // ==========================================

    let expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    for (let expense of expenses) {

        let listItem = document.createElement("li");

        listItem.textContent =
            expense.name +
            " - KES " +
            expense.amount +
            " - " +
            expense.category;

        expenseList.appendChild(listItem);
    }
}


// ==========================================
// 7. HANDLE USER INTERACTION
// ==========================================

document
    .getElementById("expenseForm")
    .addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get values from the form
        let name = document.getElementById("expenseName").value;

        let amount = Number(
            document.getElementById("expenseAmount").value
        );

        let category =
            document.getElementById("expenseCategory").value;


        // Add the new expense to the array
        expenses.push({
            name: name,
            amount: amount,
            category: category
        });


        // Clear the form
        document.getElementById("expenseForm").reset();


        // Update the dashboard
        updateDashboard();
    });


// ==========================================
// 8. INITIAL DASHBOARD DISPLAY
// ==========================================

updateDashboard();