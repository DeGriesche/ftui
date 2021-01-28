const greaterEqual = (value) => input => input >= value;

const greater = (value) => input => input > value;

const lessEqual = (value) => input => input <= value;

const less = (value) => input => input < value;

const equals = (value) => input => input = value;

const notEquals = (value) => input => input != value;

const prepend = (value) => prefix => prefix + "" + value;