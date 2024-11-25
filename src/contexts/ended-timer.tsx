import * as React from 'react';
import {createContext, useState} from 'react';

export const Context = createContext({});

export const Provider = props => {
  const clearSelection = () => {
    setSelection([]);
  };

  const [selection, setSelection] = useState([]);
  const toggle = (item: object) => {
    const result = selection.some(({id}) => id === item.id);
    if (!result) return setSelection(selection => [...selection, item]);
    setSelection(selection => selection.filter(({id}) => id !== item.id));
  };
  return (
    <Context.Provider value={{selection, toggle, clearSelection}} {...props} />
  );
};
