import React from 'react';
import './PokemonList.scss';

export const PokemonList = () => {
  return (
    <>
      <div className='pokemon-container'>
        <h1>Most wanted pokemons</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Image</th>
              <th scope='col'>Name</th>
              <th scope='col'>Description</th>
              <th scope='col'>Height</th>
              <th scope='col'>Weight</th>
              <th scope='col'>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
