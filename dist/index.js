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
    className: cx('px-1 py-1', className, 'rounded border-gray-700 border text-white text-sm'),
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "text-center"
  }, text));
};

var Button = function Button(_ref2) {
  var type = _ref2.type,
      text = _ref2.text,
      handleClick = _ref2.handleClick,
      className = _ref2.className;

  if (type === 'primary') {
    return /*#__PURE__*/React__default.createElement(Base, {
      text: text,
      className: cx('bg-indigo-700', className),
      handleClick: handleClick
    });
  }

  return /*#__PURE__*/React__default.createElement(Base, {
    text: text,
    className: className,
    handleClick: handleClick
  });
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var DeleteIcon = function DeleteIcon() {
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12.7843 0.25H1.21559C0.437466 0.25 0.399966 0.353125 0.446841 0.939062L1.3234 12.3109C1.3984 12.8875 1.45465 13.0047 2.14372 13.0047H11.8562C12.5453 13.0047 12.6015 12.8875 12.6765 12.3109L13.5531 0.939062C13.6 0.348437 13.5625 0.25 12.7843 0.25Z",
    fill: "#7E8083"
  }));
};

var fields = [{
  label: 'Prediction',
  options: [{
    label: 'Theme',
    value: 'theme'
  }, {
    label: 'Subtheme',
    value: 'subtheme'
  }, {
    label: 'Reason',
    value: 'reason'
  }, {
    label: 'Language',
    value: 'language'
  }]
}, {
  label: 'Common',
  options: [{
    label: 'CustomerId',
    value: 'customer_id'
  }, {
    label: 'Group 2, option 2',
    value: 'value_2'
  }]
}];
var conditions = [{
  label: 'Equals',
  value: '=='
}, {
  label: 'Does not equals',
  value: '!='
}, {
  label: 'Like',
  value: '%'
}];
var criterias = [{
  label: 'Offers',
  value: 'offers'
}, {
  label: 'Promotions',
  value: 'promotions'
}];

var Filter = function Filter(_ref) {
  var filterState = _ref.filterState,
      setFilterState = _ref.setFilterState,
      rowIndex = _ref.rowIndex,
      removeFilter = _ref.removeFilter;
  var field = filterState.field,
      condition = filterState.condition,
      criteria = filterState.criteria;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex gap-4 mt-10 mb-5"
  }, /*#__PURE__*/React__default.createElement(Select, {
    value: field,
    onChange: function onChange(selectedOption) {
      return setFilterState({
        item: 'field',
        selectedOption: selectedOption,
        rowIndex: rowIndex
      });
    },
    options: fields,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React__default.createElement(Select, {
    value: condition,
    onChange: function onChange(selectedOption) {
      return setFilterState({
        item: 'condition',
        selectedOption: selectedOption,
        rowIndex: rowIndex
      });
    },
    options: conditions,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React__default.createElement(Select, {
    value: criteria,
    onChange: function onChange(selectedOption) {
      return setFilterState({
        item: 'criteria',
        selectedOption: selectedOption,
        rowIndex: rowIndex
      });
    },
    options: criterias,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React__default.createElement(Button, {
    text: /*#__PURE__*/React__default.createElement(DeleteIcon, null),
    className: "ml-2 px-2",
    handleClick: function handleClick() {
      return removeFilter(rowIndex);
    }
  }));
};

var Card = function Card(_ref) {
  var groupIndex = _ref.groupIndex,
      handleConjunction = _ref.handleConjunction,
      state = _ref.state,
      handleAddFilter = _ref.handleAddFilter,
      handleFilterState = _ref.handleFilterState,
      _removeFilter = _ref.removeFilter,
      className = _ref.className;

  var renderFilters = function renderFilters() {
    return filters.map(function (item, rowIndex) {
      return /*#__PURE__*/React__default.createElement(Filter, {
        key: rowIndex,
        filterState: item,
        setFilterState: function setFilterState(filterObj) {
          return handleFilterState(_extends({}, filterObj, {
            groupIndex: groupIndex
          }));
        },
        rowIndex: rowIndex,
        removeFilter: function removeFilter() {
          return _removeFilter(rowIndex, groupIndex);
        }
      });
    });
  };

  var filters = state.filters,
      conjunction = state.conjunction;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx('w-full bg-gray-800 rounded-sm p-5', className)
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    type: conjunction === conjunctions[0] ? 'primary' : '',
    text: "AND",
    handleClick: function handleClick() {
      return handleConjunction(conjunctions[0], groupIndex);
    },
    className: "rounded-r-none px-2"
  }), /*#__PURE__*/React__default.createElement(Button, {
    type: conjunction === conjunctions[1] ? 'primary' : '',
    text: "OR",
    handleClick: function handleClick() {
      return handleConjunction(conjunctions[1], groupIndex);
    },
    className: "rounded-l-none px-2"
  })), renderFilters(), /*#__PURE__*/React__default.createElement(Button, {
    type: "primary",
    text: "+ Add filter",
    handleClick: function handleClick() {
      return handleAddFilter(groupIndex);
    },
    className: "px-2"
  }));
};

var CrossIcon = function CrossIcon(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M1 13L13 1M1 1L13 13",
    stroke: "#C7D2FE",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Header = function Header(_ref) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "bg-indigo-500 w-full p-6"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "text-white flex-grow"
  }, "Build your query"), /*#__PURE__*/React__default.createElement(Button, {
    text: /*#__PURE__*/React__default.createElement(CrossIcon, {
      className: "font-semibold"
    }),
    className: "bg-indigo-700 px-1"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "bg-indigo-700 p-5 mt-4 rounded"
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("b", {
    className: "text-white text-base"
  }, "Query:"))));
};

var conjunctions = ['&&', '||'];
var QueryBuilder = function QueryBuilder() {
  var _useState = React.useState([{
    filters: [{
      field: null,
      condition: null,
      criteria: null
    }],
    conjunction: conjunctions[0]
  }]),
      state = _useState[0],
      setState = _useState[1];

  var handleAddGroup = function handleAddGroup() {
    setState([].concat(state, [{
      filters: [{
        field: null,
        condition: null,
        criteria: null
      }],
      conjunction: conjunctions[0]
    }]));
  };

  var handleConjunction = function handleConjunction(conjunction, groupIndex) {
    state[groupIndex].conjunction = conjunction;
    setState([].concat(state));
  };

  var handleFilterState = function handleFilterState(_ref) {
    var item = _ref.item,
        selectedOption = _ref.selectedOption,
        rowIndex = _ref.rowIndex,
        groupIndex = _ref.groupIndex;
    state[groupIndex].filters[rowIndex][item] = selectedOption;
    setState([].concat(state));
  };

  var handleAddFilter = function handleAddFilter(groupIndex) {
    state[groupIndex].filters.push({
      field: null,
      condition: null,
      criteria: null
    });
    setState([].concat(state));
  };

  var removeFilter = function removeFilter(rowIndex, groupIndex) {
    if (state[groupIndex].filters.length === 1) return;
    state[groupIndex].filters.splice(rowIndex, 1);
    setState([].concat(state));
  };

  var render = function render() {
    return state.map(function (item, idx) {
      return /*#__PURE__*/React__default.createElement(Card, {
        key: idx,
        state: state[idx],
        className: "mb-5",
        groupIndex: idx,
        handleConjunction: handleConjunction,
        handleAddFilter: handleAddFilter,
        removeFilter: removeFilter,
        handleFilterState: handleFilterState
      });
    });
  };

  var _useState2 = React.useState(''),
      query = _useState2[0],
      setQuery = _useState2[1];

  var buildQuery = function buildQuery() {
    var filterQuery = '';

    for (var i = 0; i < state.length; i++) {
      var group = state[i];

      for (var j = 0; j < group.length; j++) {
        var filter = group[j];

        if (j === 0) {
          var _filter$field, _filter$condition, _filter$criteria;

          filterQuery += "\"field." + ((_filter$field = filter.field) === null || _filter$field === void 0 ? void 0 : _filter$field.value) + " " + ((_filter$condition = filter.condition) === null || _filter$condition === void 0 ? void 0 : _filter$condition.value) + " \\\"" + ((_filter$criteria = filter.criteria) === null || _filter$criteria === void 0 ? void 0 : _filter$criteria.value) + "\"\\\"";
        } else {
          var _filter$field2, _filter$condition2, _filter$criteria2;

          filterQuery += join + " \"field." + ((_filter$field2 = filter.field) === null || _filter$field2 === void 0 ? void 0 : _filter$field2.value) + " " + ((_filter$condition2 = filter.condition) === null || _filter$condition2 === void 0 ? void 0 : _filter$condition2.value) + " \\\"" + ((_filter$criteria2 = filter.criteria) === null || _filter$criteria2 === void 0 ? void 0 : _filter$criteria2.value) + "\"\\\"";
        }
      }
    }

    console.log(filterQuery);
    setQuery(filterQuery);
  };

  React.useEffect(function () {
    buildQuery();
  }, [state]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "w-full bg-gray-900 pb-20"
  }, /*#__PURE__*/React__default.createElement(Header, {
    query: query
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "container mt-52 mx-auto w-full"
  }, render(), /*#__PURE__*/React__default.createElement(Button, {
    text: "+ Add New gropup filter",
    type: "primary",
    handleClick: handleAddGroup,
    className: "px-2"
  })));
};

exports.QueryBuilder = QueryBuilder;
exports.conjunctions = conjunctions;
//# sourceMappingURL=index.js.map
