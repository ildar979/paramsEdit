import React, { useState } from 'react';
import { IParamValue, IProps } from './interfaces';
import './style.css';



const ParamEditor = ({ params, model }: IProps) => {
  const [paramValues, setParamValues] = useState<IParamValue[]>(model.paramValues);

  const handleParamChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map((paramValue) => {
      if (paramValue.paramId === paramId) {
        return { ...paramValue, value };
      }
      return paramValue;
    });
    setParamValues(updatedParamValues);
  };

  const getModel = () => {
    return { paramValues };
  };

  return (
    <div className='container'>
      {params.map((param) => (
        <div className='content' key={param.id}>
          <label>{param.name}</label>
          <input
            type="text"
            value={paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
            onChange={(e) => handleParamChange(param.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ParamEditor;
