import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

const CustomSelectList = ({ setSelected }) => {
  const data = [
    { key: '1', value: 'cleaning' },
    { key: '2', value: 'cooking' },
    { key: '3', value: 'homework' },
    { key: '4', value: 'animal care', },
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
  const inputStyles = {
    fontSize:18,
  };

  return (
    <SelectList setSelected={setSelected}
      data={data} // Changed data to customData
      save="value" 
      boxStyles={boxStyles}
      placeholder='Category'
      inputStyles={inputStyles}
    />
  );
};

export default CustomSelectList;
