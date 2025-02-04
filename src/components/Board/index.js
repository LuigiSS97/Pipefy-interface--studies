import React, {useState} from 'react';
import { loadLists } from '../../services/api'

import  BoardContext from '../Board/context'

import List from '../List'

import { Container } from './styles';

const data = loadLists();
function Board() {
  const [lists, setLists] = useState(data);
  function move(from, to) {
    console.log(from,to)
  }
  return ( 
   <BoardContext.Provider value={{lists, move}}>
  <Container> 
    {lists.map(list => <List key={list.title} data={list}/>)}
    
   </Container>
   </BoardContext.Provider> 
  )
}

export default Board;