import { useState } from 'react';
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState('');

  //here we have the function prop we are sending to the child component so we get data from the child component and set it to userEmail
  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
        {/*Here we sending the function as prop*/}
        <Form onSendData={handleReceiveData} />
        {/*Here we check if user is empty, if so we return null else we send the email as prop to <Message/> component*/}
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  )
}

export default App
