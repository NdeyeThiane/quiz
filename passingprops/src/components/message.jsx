//Here we destructor the prop we receive from the parent component
function Message({email}) {
  
    return (
      <div>
        {/*Here we check if the prop is empty, if so we return null, else we send a message with the prop*/}
        {!email ? null : <p> Thank you for submiting your email: {email} </p>}
      </div>
    );
  }
  
  export default Message;