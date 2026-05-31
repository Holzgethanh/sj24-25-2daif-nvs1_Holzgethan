// 1) APPLICATION STATE
class Budget {
  constructor(budget, zeitraum) {
  this.budget = budget;
  this.zeitraum = zeitraum;
  }
}
class Ausgabe {
   constructor(beschreibung, betrag, zeitpunkt) {
   this.beschreibung = beschreibung;
   this.betrag = betrag;
   this.zeitpunkt = zeitpunkt;
  }
}

const EXPENSES_STORAGE_KEY = 'budget-planer-expenses';

function loadExpensesFromStorage() {
  const expensesString = localStorage.getItem(EXPENSES_STORAGE_KEY);
  if(expensesString === null) return[];

  const rawExpenses = JSON.parse(expensesString);
  return rawExpenses.map(expenseObject => new Ausgabe(
  expenseObject.beschreibung,
  expenseObject.betrag,
  new Date(expenseObject.zeitpunkt)
  ));
}

const state = {
  budget: [],
  expenses: loadExpensesFromStorage()
};
// 2) STATE ACCESSORS/MUTATORS
const budgetInput = document.getElementById('budget-input');
const periodSelect = document.getElementById('period-select');
const budgetButton = document.getElementById('save-settings-btn');

const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseDateInput = document.getElementById('expense-date');
const addExpenseButton = document.getElementById('add-expense-btn');
// 3) DOM NODE REFERENCES
const expenseList = document.getElementById('expense-list');
// 4) DOM NODE CREATION FUNCTIONS
function createExpenseElement(expenseObject) {
  const expenseElement = document.createElement('li');
  expenseElement.classList.add('expense-list');

  const expenseName = document.createElement('h3');
  expenseName.textContent = expenseObject.beschreibung;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', function() {
      onDeleteExpenseBtnPressed(expenseObject);
  });

  const formattedAmount = expenseObject.betrag.toFixed(2).replace('.', ',');
  const formattedDate = expenseObject.zeitpunkt.toLocaleDateString('de-AT');
  


  const expenseText = `${expenseObject.beschreibung} - ${formattedAmount}€ (${formattedDate})`;
  expenseElement.append(expenseText, deleteButton);
  return expenseElement;
}
// 5) RENDER FUNCTIONS
function renderExpenses() {
  expenseList.innerHTML = '';
  for (const expenseObject of state.expenses) {
   const expenseElement = createExpenseElement(expenseObject);
   expenseList.appendChild(expenseElement);
 }

}
// 6) EVENT HANDLERS
function onBudgetBtnPressed() {
  //TODO
}
function onAddExpenseBtnPressed() {
    // Werte aus den Inputs holen
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const dateValue = expenseDateInput.value;

    // Validierung
    if (name === '' || isNaN(amount) || dateValue === '' ) {
        alert('Bitte alle Felder korrekt ausfüllen!');
        return;
    }

    // Neue Ausgabe erstellen & ins State packen
    const neueAusgabe = new Ausgabe(name, amount, new Date(dateValue));
    state.expenses.push(neueAusgabe);

    // Im LocalStorage speichern
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(state.expenses));

    // UI aktualisieren & Inputs leeren
    renderExpenses();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseDateInput.value = '';
}
function onDeleteExpenseBtnPressed(expenseObject) {
  const index = state.expenses.indexOf(expenseObject);
  if (index !== -1) {
    state.expenses.splice(index, 1);
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(state.expenses));
    renderExpenses();
  }
}
// 7) INIT BINDINGS
budgetButton.addEventListener('click', onBudgetBtnPressed);
addExpenseButton.addEventListener('click', onAddExpenseBtnPressed);
// 8) INITIAL RENDERING
renderExpenses();