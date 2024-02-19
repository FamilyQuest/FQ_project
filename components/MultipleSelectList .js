import React, { useState } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const MySelectComponent = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    { key: '1', value: 'Naim', },
    { key: '2', value: 'Eido' },
    { key: '3', value: 'Ran' },
    { key: '4', value: 'pokemaine',},
  ];
  const boxStyles = {
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderColor: '#8DE1D5',
    borderWidth: 3,
    borderRadius: 10,
    width:'100%',
    marginBottom:'10%',
  };
  return (
    <MultipleSelectList
      setSelected={val => setSelected(val)}
      data={data}
      save="value"
      label="Assign To"
      placeholder='Assign To'
      boxStyles={boxStyles}
      inputStyles={{fontSize:18}}
    />
  );
};

export default MySelectComponent;
