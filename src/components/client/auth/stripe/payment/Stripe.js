import React from 'react';
import { useHistory } from 'react-router-dom';
import "./stripe.css"

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
            <div className="containerc"> 
            <div className="row">
            <div className="card">
              <div className="card-body">
                     <form className="" action="/paynow" method="post">
                        <div className="form-group">
                            <label >Name: </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label >Email: </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label >Phone: </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label >Amount: </label>
                            <input className="form-control" type="text" name="amount" value=""/>
                        </div>
                        <div className="form-group">
                            <button className="btn form-control btn-primary">Pay Now</button>
                        </div>
                     </form>
             </div>
        </div>
            <div col-md-4>
                <button 
                    type="submit"
                    className="btn"
                >
                    payment of 100$ 
                </button>
            </div>
            <div col-md-4>
                <button 
                onClick={handleRoute1}
                    type="submit"
                    className="btn"
                >
                    success
                </button>
            </div>
            <div col-md-4>
                <button 
                onClick={handleRoute2}
                    type="submit"
                    className="btn"
                >
                    Cancel
                </button>
            </div>         
        </div>
        </div>
        </div>
    )
}


export default Stripe;