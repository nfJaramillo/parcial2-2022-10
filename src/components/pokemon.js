import React, {useContext, useState} from "react";
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';







const Pokemon = (props) => {

  
  
  var lng = useIntl().locale;
  
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td><img src={props.offer.ThumbnailImage} alt="Pokemon"></img></td>
      <td>{props.offer.name}</td>
      <td>{props.offer.description}</td>
      <td><FormattedNumber value={props.offer.height}/></td>
      <td><FormattedNumber value={props.offer.weight}/></td>
      <td>{props.offer.type}</td>
    </tr>
  );
};





export default Pokemon
