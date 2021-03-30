import React from 'react';

const Form = props =>{
    return(
       // <form onSubmit={props.submit}> 
       <form> 
            <input 
                type="text" 
                value={props.value}
                onChange={props.change}
                placeholder="Enter the name of the city"
            />
            
        </form>
    )
}

export default Form;