import React from 'react';
import Header from '../header';
import ItemList from '../item-list';
import Filter from '../filter';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <main>
        <ItemList />
        <Filter />
      </main>
    </div>
  );
}

export default App;
