# Mon Custom Dropdown React Component

Un composant de dropdown personnalisé pour React.

## Installation

Vous pouvez installer ce composant en utilisant npm ou yarn :

```bash
npm install mon-custom-dropdown-react
# ou
yarn add mon-custom-dropdown-react
```

## Utilisation

Pour utiliser le composant Dropdown dans votre application React, vous devez l'importer comme suit :

```javascript
import { Dropdown } from 'mon-custom-dropdown-react';

// Utilisez le composant Dropdown dans votre JSX
function App() {
  return (
    <div>
      <h1>Mon Application React</h1>
      <Dropdown title="Custom-title" children={['option 1', 'option 2', 'option 3']} onChange/>
    </div>
  );
}

export default App;
```

Le composant Dropdown peut être utilisé en passant les propriétés requises :

```jsx
const App = () => {

  return (
    <div>
      <Dropdown
          title="Sélectionner une option"
          children={[
            { name: "Option 1", keys: "key1" },
            { name: "Option 2", keys: "key2" },
            // Ajoutez plus d'options au besoin
          ]}
          onChange={(selectedOption) => {
            console.log("Option sélectionnée :", selectedOption);
            // Gérez l'option sélectionnée
          }}
          // Paramètre optionelle de personnalisation
          size="16px"
          color="white"
          backgroundColor="white"
          borderColor="#0056b3"
          borderRadius="5px"
          backgroundColorItem="#3f8cde"
          colorItem="white"
          backgroundColorItemHover="#b95959"
      />
  </div>
  )
}


```

## Popriétés
- title (chaîne de caractères) : Le titre du menu déroulant.
- children (tableau) : Un tableau d'objets représentant les options du menu déroulant, chaque objet ayant une propriété name et keys.
- onChange (fonction) : Une fonction de rappel déclenchée lorsqu'une option est sélectionnée. Elle reçoit l'option sélectionnée en tant qu'argument.
- size (chaîne de caractères) : La taille de la police du bouton du menu déroulant (par défaut : "16px").
- color (chaîne de caractères) : La couleur du texte du bouton du menu déroulant (par défaut : "white").
- backgroundColor (chaîne de caractères) : La couleur de fond du bouton du menu déroulant (par défaut : "white").
- borderColor (chaîne de caractères) : La couleur de la bordure du bouton du menu déroulant (par défaut : "#0056b3").
- borderRadius (chaîne de caractères) : Le rayon de la bordure du bouton du menu déroulant (par défaut : "5px").
- backgroundColorItem (chaîne de caractères) : La couleur de fond des éléments du menu déroulant (par défaut : "#3f8cde").
- colorItem (chaîne de caractères) : La couleur du texte des éléments du menu déroulant (par défaut : "white").
- backgroundColorItemHover (chaîne de caractères) : La couleur de fond des éléments du menu déroulant au survol (par défaut : "#b95959").
