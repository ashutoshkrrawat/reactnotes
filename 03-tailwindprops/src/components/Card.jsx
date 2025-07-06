function Card({username="no username given"}) { /*here after the equal to sign the value given is default value if we dont give any username value in app.jsx then the default value gets assinged*/
  console.log("username",username);
  
  return (
    <div className="w-72 flex flex-col rounded-xl overflow-hidden bg-white shadow-lg mt-4">
      <img
        src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"
        alt="test"
        className="w-full h-48 object-cover"
      />
      <div className="bg-black text-white p-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>{username}</span>
          <span>Price</span>
        </div>
        <div className="flex justify-between text-sm font-mono mt-2">
          <span>#345</span>
          <span>0.01 ETH</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
