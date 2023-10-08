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
      <Dropdown title="Custom-title" children={['option 1', 'option 2', 'option 3']}/>
    </div>
  );
}

export default App;
```

## Popriétés

Le composant Dropdown accepte les propriétés suivantes :

- title: Le titre du dropdown.
- children: Un tableau d'options à afficher dans le dropdown.
