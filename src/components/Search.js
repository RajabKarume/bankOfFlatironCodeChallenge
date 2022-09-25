import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Search() {

  const [transactions, setTransactions] = useState([])
  const [searching ,setSearching] = useState("")
  
  useEffect(() => {
    const fetchTransactions = async ()=>{
      const result = await fetch("http://localhost:8001/transactions")
      const resultJson = await result.json();
  
      setTransactions(resultJson)
    }
    fetchTransactions();
  },[])
  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearching(event.target.value);
  };

  if (searching.length>0){
    transactions.filter((transaction)=>{
      return transaction.description.match(searching);
    })
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onChangeHandler}
        value= {searching}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
