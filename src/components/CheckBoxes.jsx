import React from 'react';

const CheckBoxes = props => {
  const { click } = props;
  return (
    <div>
      <label htmlFor="checkboxes" className="checkbox" >
        <input type="checkbox" className="checkboxes" value="balanced"
          onClick={click} />Balanced
      </label>

      <label htmlFor="checkboxes" className="checkbox" >
        <input type="checkbox" className="checkboxes" value="high-protein" onClick={click} />High-Protein
      </label>

      <label htmlFor="checkboxes" className="checkbox" >
        <input type="checkbox" className="checkboxes" value="low-fat"
          onClick={click} />Low-Fat
      </label>

      <label htmlFor="checkboxes" className="checkbox" >
        <input type="checkbox" className="checkboxes" value="low-carb"
          onClick={click} />Low-Carb
      </label>
    </div>
  );
}

export default CheckBoxes;