import React, { PropTypes } from "react";

const Radio = ({
    name: _name,
    value,
    label,
    className,
    disabled
}) => {
    return (
        <div className="radio">
            <input
                name={_name}
                value={value}
                type="radio"
                disabled={disabled}
            />
            <span className="multiline">{label}</span>
        </div>
    );
};

Radio.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

Radio.defaultProps = {
    disabled: false
};

module.exports = Radio;