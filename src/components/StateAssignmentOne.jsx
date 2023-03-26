import react, { useState } from 'react';

const StateAssignmentOne = () => {
    const [count, setCount]= useState(0);
    const handleOnClick = () =>{
        setCount(count+1);
    }

        return(
            <section className="state-assignment-one">
                <button onClick={handleOnClick}> {count}</button>
            </section>
        );
}
export default StateAssignmentOne;





