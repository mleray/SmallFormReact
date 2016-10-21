import React, { PropTypes } from "react";

const Radio = ({
    name: _name,
    value,
    checked,
    label,
    className
}) => {
    return (
        <div className="radio">
            <input
                name={_name}
                value={value}
                type="radio"
                checked={checked}
            />
            <span>{label}</span>
        </div>
    );
};

Radio.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired
};

Radio.defaultProps = {
    checked: false
};

export default Radio;