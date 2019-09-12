import React from 'react';

const CheckBoxes = props => {
  const { click } = props;
  return (
    <div>
      <input type="checkbox" className="checkboxes" value="balanced"
        onClick={click} />
      <label htmlFor="checkboxes" className="checkbox" >Balanced</label>

      <input type="checkbox" className="checkboxes" value="high-protein" onClick={click} />
      <label htmlFor="checkboxes" className="checkbox" >High-Protein</label>

      <input type="checkbox" className="checkboxes" value="low-fat"
        onClick={click} />
      <label htmlFor="checkboxes" className="checkbox" >Low-Fat</label>

      <input type="checkbox" className="checkboxes" value="low-carb"
        onClick={click} />
      <label htmlFor="checkboxes" className="checkbox" >Low-Carb</label>
    </div>
  );
}

export default CheckBoxes;