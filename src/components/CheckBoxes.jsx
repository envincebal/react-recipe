import React from 'react';

const CheckBoxes = props => {
  return (
    <div>
      <input type="checkbox" className="checkboxes" value="balanced" onClick={props.click} />
      <label htmlFor="checkboxes" className="checkbox" >Balanced</label>

      <input type="checkbox" className="checkboxes" value="high-protein" onClick={props.click} />
      <label htmlFor="checkboxes" className="checkbox" >High-Protein</label>

      <input type="checkbox" className="checkboxes" value="low-fat" onClick={props.click} />
      <label htmlFor="checkboxes" className="checkbox" >Low-Fat</label>

      <input type="checkbox" className="checkboxes" value="low-carb" onClick={props.click} />
      <label htmlFor="checkboxes" className="checkbox" >Low-Carb</label>
    </div>
  );
}

export default CheckBoxes;