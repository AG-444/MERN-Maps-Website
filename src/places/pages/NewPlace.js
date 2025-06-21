import React,{useCallback} from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {

  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);


  return (
    <form className="place-form">
      <Input 
        id="Title" 
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText = "Please enter a Valid Title"
        onInput ={titleInputHandler}
      />
      <Input 
        id="description" 
        element="text-area" 
        label="description" 
        rows='7'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
        errorText = "Please enter a Valid desription (atleast 5 characters)"
        onInput ={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
