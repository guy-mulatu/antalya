import React from 'react';


function InvestmentOption(props) {

    const { id, name, amount, description, payable } = props.data

    return ( 
        <div>
            <p> {description.fr}</p>
            <p><i>{description.en}</i></p>
            <p><u>amount required:</u> EUR {amount.toLocaleString()}</p>
            <p><u>number of payments:</u> {payable}</p>
            <button className='btn btn-warning' type='button' href='#'>savoir plus</button>
            
        </div>
        
     );
}

export default InvestmentOption;