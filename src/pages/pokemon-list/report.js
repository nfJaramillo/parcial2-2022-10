import React, {useEffect,useState} from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';

export const Report = () => {

    const [pokeEnglish, setPokeEnglish] = useState([]);

  const [pokeEspa, setPokeEspa] = useState([]);

  
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
        <div className="card">
          <Chart
            data={pokeEnglish}
            rotated={false} 
          >
    
            <ArgumentAxis />
            <ValueAxis max={1} />
  
            <BarSeries
              valueField="height"
              argumentField="name"
              color='blue'
              
            />
            <Title text="Pokemons" />
            <Animation />
          </Chart>
        </div>
      );

};
