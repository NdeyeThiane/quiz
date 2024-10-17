import { useState } from 'react';

//Here we destructor the prop we receive from the parent component
function Form({ onSendData }) {
  //create inputValue state is a great idea and now we can use it to capture the input (Don't delete)
  const [inputValue, setInputValue] = useState('');

// we create this function to take what the user is typing and set it to inputValue
//so we can use it later (Don't delete)
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


// And now we are taking the data the user enter and sending to the parent component using the function prop 
//we receive from the parent component (Don't delete)
  const handleSendData = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <input type="email" placeholder="Please enter your email" value={inputValue} onChange={handleInputChange} />
      
      {/*here when the user click the send button, the handleSend Data is call and that send the data to the parent component, if we don't call
      // the function here then the parent component will not have access to the data (Don't delete)*/}
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;