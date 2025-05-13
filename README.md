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
git clone https://votre-repo/gestion-depenses.git
cd gestion-depenses
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

## Personnalisation

### Ajouter de nouvelles catégories

Pour ajouter de nouvelles catégories de dépenses, modifiez les options dans le fichier `index.html` :

```html
<select id="categorie">
  <option value="Quotidien">Quotidien</option>
  <option value="Alimentation">Alimentation</option>
  <!-- Ajoutez vos nouvelles catégories ici -->
  <option value="Votre-Categorie">Votre Catégorie</option>
</select>
```

N'oubliez pas d'ajouter également ces catégories dans le filtre :

```html
<select id="filtre">
  <option value="Toutes">Toutes</option>
  <option value="Quotidien">Quotidien</option>
  <!-- Ajoutez les mêmes catégories ici -->
  <option value="Votre-Categorie">Votre Catégorie</option>
</select>
```

## Dépannage

### Les données ne se sauvegardent pas
- Vérifiez que vous n'utilisez pas le mode navigation privée
- Assurez-vous que le stockage local n'est pas désactivé dans votre navigateur
- Vérifiez que vous avez suffisamment d'espace de stockage disponible

### Le total ne se met pas à jour
- Rafraîchissez la page
- Vérifiez que les montants entrés sont des nombres valides

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Soumettre des pull requests

## Licence

Ce projet est disponible sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer comme bon vous semble.
