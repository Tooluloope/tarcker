import React, { Fragment, useEffect } from 'react';
import  { Redirect } from 'react-router-dom'

import './home.page.scss';
import Expense from '../../components/expense/expense.component';
import Total from '../../components/total/total.component.';
import Income from '../../components/income/income.component';
import { auth } from '../../components/firebase/firebase.utils';
import { Paper } from '@material-ui/core';




const Home = () => {

    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
          if(!userAuth) {
              console.log(userAuth)
            return <Redirect to = {{
                pathname: "/sign-in" } } />
          }
        });
      }, []
      )
    
    return(
        <Fragment>
            <Total></Total>
            <div className="add">
                <div className="add__container">
                    <select className="add__type">
                        <option value="inc" defaultValue>+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className="add__description" placeholder="Add description" />
                    <input type="number" className="add__value" placeholder="Value" />
                    <button className=" "><i className="ion-ios-checkmark-outline"></i></button>
                </div>
            </div>
            
            <div className="container clearfix">
             
              <Income></Income>

              <Expense></Expense>

            </div>
           
        </Fragment>
        
    )
};

export default Home;