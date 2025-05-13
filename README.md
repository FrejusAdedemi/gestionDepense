# Gestion des Dépenses

Une application web simple et efficace permettant de gérer facilement vos dépenses personnelles.

## Fonctionnalités

- **Ajouter des dépenses** : Enregistrez facilement vos dépenses avec un titre, un montant et une catégorie
- **Modifier des dépenses** : Possibilité de mettre à jour les informations des dépenses existantes
- **Supprimer des dépenses** : Supprimez les entrées qui ne sont plus nécessaires
- **Filtrer par catégorie** : Visualisez vos dépenses par catégorie spécifique
- **Calcul automatique** : Total des dépenses calculé et mis à jour automatiquement
- **Stockage local** : Les données sont sauvegardées localement dans votre navigateur
- **Interface responsive** : Fonctionne sur ordinateurs, tablettes et smartphones

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage API

## Installation et utilisation

### Option 1 : Téléchargement direct
1. Téléchargez les fichiers du projet
2. Décompressez l'archive
3. Ouvrez le fichier `index.html` dans votre navigateur

### Option 2 : Clonage via Git
```bash
git clone https://github.com/FrejusAdedemi/gestionDepense.git
cd gestionDepense
# Ouvrez index.html dans votre navigateur
```

## Structure du projet

```
gestion-depenses/
│
├── index.html         # Interface utilisateur de l'application
├── script.js          # Logique JavaScript pour la gestion des dépenses
├── README.md          # Documentation du projet
```

## Guide d'utilisation

### Ajouter une dépense
1. Remplissez le formulaire en haut de la page avec :
   - Titre de la dépense
   - Montant
   - Catégorie
2. Cliquez sur le bouton "Ajouter"

### Modifier une dépense
1. Cliquez sur le bouton "Modifier" à côté de la dépense concernée
2. Le formulaire sera pré-rempli avec les informations actuelles
3. Modifiez les champs souhaités
4. Cliquez sur "Modifier" pour confirmer les changements
5. Pour annuler la modification, cliquez sur "Annuler"

### Supprimer une dépense
1. Cliquez sur le bouton "Supprimer" à côté de la dépense concernée

### Filtrer les dépenses
1. Utilisez le menu déroulant "Filtrer par catégorie" pour sélectionner la catégorie souhaitée
2. Sélectionnez "Toutes" pour afficher l'ensemble des dépenses

## Fonctionnement technique

L'application utilise l'API LocalStorage du navigateur pour stocker les données de manière persistante. Cela signifie que vos dépenses seront conservées même après avoir fermé le navigateur ou redémarré votre appareil.

### Limitations

- Les données sont stockées uniquement dans le navigateur utilisé
- La capacité de stockage est limitée (généralement 5-10 MB selon les navigateurs)
- Les données ne sont pas synchronisées entre différents appareils
