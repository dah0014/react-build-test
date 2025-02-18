import React from 'react';

const ListItem = ({path, name}) => {
  console.log(path, name);
  return (
    <li>
      <a href={path}>{name.toUpperCase()}</a>
    </li>
  )
};

export default ListItem;