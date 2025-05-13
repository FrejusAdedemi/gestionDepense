// Script.js - Gestion des dépenses

// Sélection des éléments du DOM
const form = document.querySelector('form') || document.getElementById('expense-form');
const titreInput = document.getElementById('titre');
const montantInput = document.getElementById('montant');
const categorieSelect = document.getElementById('categorie');
const filtreSelect = document.getElementById('filtre');
const expensesTable = document.getElementById('expenses-table');
const totalSpan = document.getElementById('total');
const submitBtn = document.getElementById('ajouter');

// Variables pour la modification
let isEditing = false;
let editExpenseId = null;

// Tableau pour stocker les dépenses
let expenses = [];

// Fonction pour sauvegarder les dépenses dans le localStorage
function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Fonction pour charger les dépenses depuis le localStorage
function loadExpenses() {
  const savedExpenses = localStorage.getItem('expenses');
  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
    displayExpenses();
  }
}

// Fonction pour ajouter ou modifier une dépense
function handleExpenseSubmit(e) {
  e.preventDefault();
  
  const titre = titreInput.value.trim();
  const montant = parseFloat(montantInput.value);
  const categorie = categorieSelect.value;
  
  if (titre === '' || isNaN(montant) || montant <= 0) {
    alert('Veuillez entrer un titre et un montant valide');
    return;
  }
  
  if (isEditing) {
    // Modifier une dépense existante
    updateExpense(editExpenseId, titre, montant, categorie);
  } else {
    // Ajouter une nouvelle dépense
    const expense = {
      id: Date.now(),
      titre,
      montant,
      categorie
    };
    
    expenses.push(expense);
  }
  
  saveExpenses();
  displayExpenses();
  resetForm();
}

// Fonction pour mettre à jour une dépense
function updateExpense(id, titre, montant, categorie) {
  expenses = expenses.map(expense => {
    if (expense.id === id) {
      return {
        ...expense,
        titre,
        montant,
        categorie
      };
    }
    return expense;
  });
}

// Fonction pour charger les données d'une dépense dans le formulaire pour modification
function editExpense(id) {
  const expense = expenses.find(expense => expense.id === id);
  if (!expense) return;
  
  titreInput.value = expense.titre;
  montantInput.value = expense.montant;
  categorieSelect.value = expense.categorie;
  
  // Changer le texte du bouton
  submitBtn.textContent = 'Modifier';
  submitBtn.classList.add('edit-mode');
  
  // Passer en mode édition
  isEditing = true;
  editExpenseId = id;
  
  // Faire défiler vers le formulaire
  form.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
  titreInput.value = '';
  montantInput.value = '';
  categorieSelect.selectedIndex = 0;
  
  // Réinitialiser le bouton et le mode d'édition
  submitBtn.textContent = 'Ajouter';
  submitBtn.classList.remove('edit-mode');
  
  isEditing = false;
  editExpenseId = null;
}

// Fonction pour annuler la modification
function cancelEdit() {
  resetForm();
}

// Fonction pour supprimer une dépense
function deleteExpense(id) {
  // Si on supprime une dépense en cours d'édition, réinitialiser le formulaire
  if (isEditing && editExpenseId === id) {
    resetForm();
  }
  
  expenses = expenses.filter(expense => expense.id !== id);
  saveExpenses();
  displayExpenses();
}

// Fonction pour afficher les dépenses filtrées
function displayExpenses() {
  const filtreValue = filtreSelect.value;
  
  // Filtrer les dépenses selon la catégorie sélectionnée
  const filteredExpenses = filtreValue === 'Toutes' 
    ? expenses 
    : expenses.filter(expense => expense.categorie === filtreValue);
  
  // Vider le tableau
  const tbody = expensesTable.querySelector('tbody') || expensesTable;
  tbody.innerHTML = '';
  
  // Calculer le total
  let total = 0;
  
  // Ajouter chaque dépense au tableau
  filteredExpenses.forEach(expense => {
    total += expense.montant;
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.titre}</td>
      <td>${expense.montant.toFixed(2)} €</td>
      <td>${expense.categorie}</td>
      <td>
        <button class="edit-btn" data-id="${expense.id}">Modifier</button>
        <button class="delete-btn" data-id="${expense.id}">Supprimer</button>
      </td>
    `;
    
    tbody.appendChild(row);
  });
  
  // Mettre à jour le total
  totalSpan.textContent = total.toFixed(2) + ' €';
  
  // Ajouter les écouteurs d'événements pour les boutons
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.getAttribute('data-id'));
      deleteExpense(id);
    });
  });
  
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.getAttribute('data-id'));
      editExpense(id);
    });
  });
  
  // Mettre à jour le filtre avec les catégories disponibles
  populateFilter();
}

// Fonction pour remplir le filtre avec les catégories disponibles
function populateFilter() {
  // Récupérer toutes les catégories uniques
  const categories = ['Toutes', ...new Set(expenses.map(expense => expense.categorie))];
  
  // Sauvegarder la sélection actuelle
  const currentSelection = filtreSelect.value;
  
  // Vider le filtre
  filtreSelect.innerHTML = '';
  
  // Ajouter chaque catégorie au filtre
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    filtreSelect.appendChild(option);
  });
  
  // Restaurer la sélection si elle existe toujours
  if (categories.includes(currentSelection)) {
    filtreSelect.value = currentSelection;
  }
}

// Écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
  // Charger les dépenses au chargement de la page
  loadExpenses();
  
  // Ajouter ou modifier une dépense lors de la soumission du formulaire
  if (form) {
    form.addEventListener('submit', handleExpenseSubmit);
  } else {
    document.getElementById('ajouter').addEventListener('click', handleExpenseSubmit);
  }
  
  // Filtrer les dépenses lors du changement de filtre
  filtreSelect.addEventListener('change', displayExpenses);
  
  // Ajouter l'écouteur pour annuler la modification
  if (document.getElementById('cancel-edit')) {
    document.getElementById('cancel-edit').addEventListener('click', cancelEdit);
  }
});