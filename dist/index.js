function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cx = _interopDefault(require('classnames'));
var Select = _interopDefault(require('react-select'));

var Base = function Base(_ref) {
  var text = _ref.text,
      handleClick = _ref.handleClick,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement("button", {
    className: cx('px-3 py-1', 'rounded border-gray-700 border text-white', className),
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement("span", null, text));
};

var Button = function Button(_ref2) {
  var type = _ref2.type,
      text = _ref2.text,
      handleClick = _ref2.handleClick,
      className = _ref2.className;

  if (type === 'primary') {
    return /*#__PURE__*/React__default.createElement(Base, {
      text: text,
      className: cx('bg-indigo-600', className),
      onClick: handleClick
    });
  }

  return /*#__PURE__*/React__default.createElement(Base, {
    text: text,
    className: className,
    onClick: handleClick
  });
};

var styles = {"card":"_card-module__card__3QbY4","select":"_card-module__select__1H9P5"};

var options = [{
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

var Card = function Card(_ref2) {

  var handleClick = function handleClick() {
    alert('fired');
  };

  var _useState = React.useState(null),
      selectedOption = _useState[0],
      setSelectedOption = _useState[1];

  var handleChange = function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
    console.log("Option selected:", selectedOption);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.card
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    type: "primary",
    text: "AND",
    handleClick: handleClick,
    className: "rounded-r-none"
  }), /*#__PURE__*/React__default.createElement(Button, {
    text: "OR",
    handleClick: handleClick,
    className: "rounded-l-none"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "grid grid-cols-3 gap-4 mt-10 mb-5"
  }, /*#__PURE__*/React__default.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  }), /*#__PURE__*/React__default.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  }), /*#__PURE__*/React__default.createElement(Select, {
    value: selectedOption,
    onChange: handleChange,
    options: options,
    styles: {}
  })), /*#__PURE__*/React__default.createElement(Button, {
    type: "primary",
    text: "+ Add filter",
    handleClick: handleClick
  }));
};

var QueryBuilder = function QueryBuilder(_ref) {
  return /*#__PURE__*/React__default.createElement(Card, null);
};

exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=index.js.map
