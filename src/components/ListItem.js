import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ id, label, isSelected, onChange }) => {
  return (
    <div className="list-item">
      <input
        type="checkbox"
        id={id}
        checked={isSelected}
        onChange={(e) => onChange(id, e.target.checked)}
        className="list-item-checkbox"
      />
      <label htmlFor={id} className="list-item-label">
        {label}
      </label>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  isSelected: false,
};

export default ListItem;
