import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default ({ rank, imageURL, username, recent, alltime }) => {
  const style = {
    "text-align": "center"
  };
  return (
      <tr>
          <td>{rank}</td>
          <td>
            <Image responsive circle thumbnail alt="50x50" width="50" height="50" src={imageURL} /> {username}
          </td>
          <td style={style}>{recent}</td>
          <td style={style}>{alltime}</td>
      </tr>
  );
};
