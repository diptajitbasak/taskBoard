import React from 'react'
import Card from './Card';

const List = ({title}) => {
  return (
    <div style={style.container}>
      <h1>{title}</h1>
      <Card />
    </div>
  )
}

const style = {
  container: {
    backgroundColor: '#eee',
    borderRedius: 3,
    width: '300px'
  }
};

export default List;