import React, { useState } from 'react';
import cx from 'classnames';
import Select from 'react-select';

const Base = ({
  text,
  handleClick,
  className
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: cx('px-3 py-1', 'rounded border-gray-700 border text-white', className),
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", null, text));
};

const Button = ({
  type,
  text,
  handleClick,
  className
}) => {
  if (type === 'primary') {
    return /*#__PURE__*/React.createElement(Base, {
      text: text,
      className: cx('bg-indigo-600', className),
      onClick: handleClick
    });
  }

  return /*#__PURE__*/React.createElement(Base, {
    text: text,
    className: className,
    onClick: handleClick
  });
};

var styles = {"card":"_card-module__card__3QbY4","select":"_card-module__select__1H9P5"};

const options = [{
  label: 'Prediction',
  options: [{
    label: 'Group 1, option 1',
    value: 'value_1'
  }, {
    label: 'Group 1, option 2',
    value: 'value_2'
  }]
}, {
  label: 'Common',
  options: [{
    label: 'Group 1, option 1',
    value: 'value_1'
  }, {
    label: 'Group 1, option 2',
    value: 'value_2'
  }]
}, {
  label: 'Another root option',
  value: 'value_4'
}];

const Card = ({
  text
}) => {
  const handleClick = () => {
    alert('fired');
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.card
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "AND",
    handleClick: handleClick,
    className: "rounded-r-none"
  }), /*#__PURE__*/React.createElement(Button, {
    text: "OR",
    handleClick: handleClick,
    className: "rounded-l-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 mt-10 mb-5"
  }, /*#__PURE__*/React.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  }), /*#__PURE__*/React.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  }), /*#__PURE__*/React.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  })), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "+ Add filter",
    handleClick: handleClick
  }));
};

const QueryBuilder = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(Card, null);
};

export { QueryBuilder };
//# sourceMappingURL=index.modern.js.map
