import React, {useEffect,useState} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import './PokemonList.scss';
import Pokemon  from "../../components/pokemon";


  

export const PokemonList = () => {

  const [pokeEnglish, setPokeEnglish] = useState([]);

  const [pokeEspa, setPokeEspa] = useState([]);

  var lng = useIntl().locale;
  
  useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("pokeEnglish") === null) {
          setPokeEnglish([{name:"No connection and no data in cache"}])
        } else {
          setPokeEnglish(JSON.parse(localStorage.getItem("pokeEnglish")));
        }

        if(localStorage.getItem("pokeEspa") === null) {
          setPokeEspa([{name:"No connection and no data in cache"}])
        } else {
          setPokeEspa(JSON.parse(localStorage.getItem("pokeEspa")));
        }


    } else {
        var URL = 'https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json'
        fetch(URL).then(res=>res.json()).then(data=>{
          setPokeEnglish(data);
            localStorage.setItem("pokeEnglish", JSON.stringify(data));
        })

        URL = 'https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/f8357c439bbb7b4bd3dc6e8807c52105fb137ec6/pokemon-es.json'
        fetch(URL).then(res=>res.json()).then(data=>{
          setPokeEspa(data);
            localStorage.setItem("pokeEspa", JSON.stringify(data));
        })
    }
  
}, []);


  return (
    <>
      <div className='pokemon-container'>
        <h1>Most wanted pokemons</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'><FormattedMessage id="Image"/></th>
              <th scope='col'><FormattedMessage id="Name"/></th>
              <th scope='col'><FormattedMessage id="Description"/></th>
              <th scope='col'><FormattedMessage id="Height"/></th>
              <th scope='col'><FormattedMessage id="Weight"/></th>
              <th scope='col'><FormattedMessage id="Type"/></th>
            </tr>
          </thead>
          <tbody>
          {lng==="es"?pokeEspa.map((e, i) => (
            <Pokemon key={i} offer={e} />
          )):
          pokeEnglish.map((e, i) => (
            <Pokemon key={i} offer={e} />
          ))
          }
        </tbody>
        </table>
      </div>
    </>
  );
};
