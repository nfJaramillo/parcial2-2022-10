import { LOCALES } from './i18n/locales';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import messages from './i18n/messages';
import { NavBar } from './shared/components/NavBar';
import { PokemonList } from './pages/pokemon-list/PokemonList';
import { Report } from './pages/pokemon-list/report';
import './App.scss';

function App() {
  return (
    <>

        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<PokemonList></PokemonList>} />
            <Route exact path='/report' element={<Report></Report>} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>

    </>
  );
}

export default App;
