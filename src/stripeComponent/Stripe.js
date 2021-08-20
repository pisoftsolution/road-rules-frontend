import React from 'react';
import { useHistory } from 'react-router-dom';

function Stripe(){
    const history = useHistory();
    const handleRoute1 = () => {
    history.push(`/Success`);
  }; 
  const handleRoute2 = () => {
    history.push(`/Cancel`);
  }; 
    return (
        <div>
            <button 
                type="submit"
                className="btn"
            >
                payment of 100$ 
            </button>
            <button 
             onClick={handleRoute1}
                type="submit"
                className="btn"
            >
                success
            </button>
            <button 
            onClick={handleRoute2}
                type="submit"
                className="btn"
            >
                Cancel
            </button>
        </div>
    )
}

export default Stripe;