import React from 'react';

const CheckBoxes = props => {
  return (
    <div>
      <input type="checkbox" className="checkboxes" value="balanced" />
      <label htmlFor="checkboxes" className="checkbox">Balanced</label>

      <input type="checkbox" className="checkboxes" value="high-protein" />
      <label htmlFor="checkboxes" className="checkbox">High-Protein</label>

      <input type="checkbox" className="checkboxes" value="low-fat" />
      <label htmlFor="checkboxes" className="checkbox">Low-Fat</label>

      <input type="checkbox" className="checkboxes" value="low-carb" />
      <label htmlFor="checkboxes" className="checkbox">Low-Carb</label>
    </div>
  );
}

export default CheckBoxes;