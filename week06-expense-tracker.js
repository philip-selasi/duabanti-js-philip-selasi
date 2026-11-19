// Week 6 — Mini Project 1: Expense Tracker
// Submission by Philip Selasi

// 1. Array of expenses
const expenses = [
  {
    description: "Lunch",
    amount: 50,
    category: "Food",
    date: "2026-11-15"
  },
  {
    description: "Transport",
    amount: 30,
    category: "Transport",
    date: "2026-11-15"
  },
  {
    description: "Data bundle",
    amount: 20,
    category: "Internet",
    date: "2026-11-15"
  },
  {
    description: "Exercise books",
    amount: 45,
    category: "Education",
    date: "2026-11-15"
  },
  {
    description: "Snacks",
    amount: 15,
    category: "Food",
    date: "2026-11-15"
  }
];

// 2. Set the budget
const budget = 500;

// 3. Function to add a new expense
function addExpense(expenses, expense) {
  return [...expenses, expense];
}

// 4. Format money into Ghana cedis
function formatMoney(amount) {
  return amount.toLocaleString("en-GH", {
    style: "currency",
    currency: "GHS"
  });
}

// 5. Calculate total expenses
function getTotal(expenses) {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

// 6. Display all expenses
function formatAll(expenses) {
  if (expenses.length === 0) {
    console.log("No expenses yet.");
    return;
  }

  console.log("\nMY EXPENSES");
  console.log("--------------------------");

  for (const expense of expenses) {
    console.log(
      `${expense.description} | ${formatMoney(expense.amount)} | ${expense.category} | ${expense.date}`
    );
  }

  console.log("--------------------------");
}

// 7. Calculate totals for each category
function getCategoryTotals(expenses) {
  return expenses.reduce((totals, expense) => {
    if (totals[expense.category] === undefined) {
      totals[expense.category] = 0;
    }

    totals[expense.category] += expense.amount;

    return totals;
  }, {});
}

// 8. Find the most expensive expense
function getMostExpensive(expenses) {
  if (expenses.length === 0) {
    return null;
  }

  let mostExpensive = expenses[0];

  for (const expense of expenses) {
    if (expense.amount > mostExpensive.amount) {
      mostExpensive = expense;
    }
  }

  return mostExpensive;
}

// 9. Check the budget
function checkBudget(expenses, budget) {
  const total = getTotal(expenses);

  if (total > budget) {
    console.log("WARNING: You have exceeded your budget!");
    console.log("Amount exceeded:", formatMoney(total - budget));
  } else {
    console.log("You are within your budget.");
    console.log("Remaining budget:", formatMoney(budget - total));
  }
}

// =================================
// MAIN PROGRAM
// =================================

// Add a new expense
const newExpense = {
  description: "Mobile money charge",
  amount: 5,
  category: "Fees",
  date: "2026-11-15"
};

const updatedExpenses = addExpense(expenses, newExpense);

// Display the expense tracker
console.log("\n================================");
console.log("       MY EXPENSE TRACKER");
console.log("================================");

// Display all expenses
formatAll(updatedExpenses);

// Display total spending
console.log("\nTOTAL SPENDING");
console.log(formatMoney(getTotal(updatedExpenses)));

// Display category totals
console.log("\nSPENDING BY CATEGORY");

const categoryTotals = getCategoryTotals(updatedExpenses);

if (Object.keys(categoryTotals).length === 0) {
  console.log("No category totals yet.");
} else {
  for (const category in categoryTotals) {
    console.log(
      `${category}: ${formatMoney(categoryTotals[category])}`
    );
  }
}

// Display most expensive expense
console.log("\nMOST EXPENSIVE EXPENSE");

const highest = getMostExpensive(updatedExpenses);

if (highest === null) {
  console.log("No expenses available.");
} else {
  console.log(
    `${highest.description}: ${formatMoney(highest.amount)}`
  );
}

// Check spending budget
console.log("\nBUDGET CHECK");
checkBudget(updatedExpenses, budget);

console.log("\n================================");
console.log("          END OF REPORT");
console.log("================================");