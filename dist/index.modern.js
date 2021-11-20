import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Select from 'react-select';

const Base = ({
  text,
  handleClick,
  className
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: cx('px-1 py-1', className, 'rounded border-gray-700 border text-white text-sm'),
    onClick: () => handleClick()
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-center"
  }, text));
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
      className: cx('bg-indigo-700', className),
      handleClick: handleClick
    });
  }

  return /*#__PURE__*/React.createElement(Base, {
    text: text,
    className: className,
    handleClick: handleClick
  });
};

const DeleteIcon = () => {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.7843 0.25H1.21559C0.437466 0.25 0.399966 0.353125 0.446841 0.939062L1.3234 12.3109C1.3984 12.8875 1.45465 13.0047 2.14372 13.0047H11.8562C12.5453 13.0047 12.6015 12.8875 12.6765 12.3109L13.5531 0.939062C13.6 0.348437 13.5625 0.25 12.7843 0.25Z",
    fill: "#7E8083"
  }));
};

const fields = [{
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
const conditions = [{
  label: 'Equals',
  value: '=='
}, {
  label: 'Does not equals',
  value: '!='
}, {
  label: 'Like',
  value: '%'
}];
const criterias = [{
  label: 'Offers',
  value: 'offers'
}, {
  label: 'Promotions',
  value: 'promotions'
}];

const Filter = ({
  filterState,
  setFilterState,
  rowIndex,
  removeFilter
}) => {
  const {
    field,
    condition,
    criteria
  } = filterState;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 mt-10 mb-5"
  }, /*#__PURE__*/React.createElement(Select, {
    value: field,
    onChange: selectedOption => setFilterState({
      item: 'field',
      selectedOption,
      rowIndex
    }),
    options: fields,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React.createElement(Select, {
    value: condition,
    onChange: selectedOption => setFilterState({
      item: 'condition',
      selectedOption,
      rowIndex
    }),
    options: conditions,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React.createElement(Select, {
    value: criteria,
    onChange: selectedOption => setFilterState({
      item: 'criteria',
      selectedOption,
      rowIndex
    }),
    options: criterias,
    styles: {},
    className: "flex-grow w-full text-sm"
  }), /*#__PURE__*/React.createElement(Button, {
    text: /*#__PURE__*/React.createElement(DeleteIcon, null),
    className: "ml-2 px-2",
    handleClick: () => removeFilter(rowIndex)
  }));
};

const Card = ({
  groupIndex,
  handleConjunction,
  state,
  handleAddFilter,
  handleFilterState,
  removeFilter,
  join,
  className
}) => {
  const renderFilters = () => {
    return filters.map((item, rowIndex) => {
      return /*#__PURE__*/React.createElement(Filter, {
        key: rowIndex,
        filterState: item,
        setFilterState: filterObj => handleFilterState({ ...filterObj,
          groupIndex
        }),
        rowIndex: rowIndex,
        removeFilter: () => removeFilter(rowIndex, groupIndex)
      });
    });
  };

  const {
    filters,
    conjunction
  } = state;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('w-full bg-gray-800 rounded-sm p-5', className)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: conjunction === conjunctions[0] ? 'primary' : '',
    text: "AND",
    handleClick: () => handleConjunction(conjunctions[0], groupIndex),
    className: "rounded-r-none px-2"
  }), /*#__PURE__*/React.createElement(Button, {
    type: conjunction === conjunctions[1] ? 'primary' : '',
    text: "OR",
    handleClick: () => handleConjunction(conjunctions[1], groupIndex),
    className: "rounded-l-none px-2"
  })), renderFilters(), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "+ Add filter",
    handleClick: () => handleAddFilter(groupIndex),
    className: "px-2"
  }));
};

const CrossIcon = ({
  className
}) => {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 13L13 1M1 1L13 13",
    stroke: "#C7D2FE",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

const Header = ({
  query
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-500 w-full p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white flex-grow"
  }, "Build your query"), /*#__PURE__*/React.createElement(Button, {
    text: /*#__PURE__*/React.createElement(CrossIcon, {
      className: "font-semibold"
    }),
    className: "bg-indigo-700 px-1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-700 p-5 mt-4 rounded"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    className: "text-white text-base"
  }, "Query:"))));
};

const conjunctions = ['&&', '||'];
const QueryBuilder = () => {
  const [state, setState] = useState([{
    filters: [{
      field: null,
      condition: null,
      criteria: null
    }],
    conjunction: conjunctions[0]
  }]);

  const handleAddGroup = () => {
    setState([...state, {
      filters: [{
        field: null,
        condition: null,
        criteria: null
      }],
      conjunction: conjunctions[0]
    }]);
  };

  const handleConjunction = (conjunction, groupIndex) => {
    state[groupIndex].conjunction = conjunction;
    setState([...state]);
  };

  const handleFilterState = ({
    item,
    selectedOption,
    rowIndex,
    groupIndex
  }) => {
    state[groupIndex].filters[rowIndex][item] = selectedOption;
    setState([...state]);
  };

  const handleAddFilter = groupIndex => {
    state[groupIndex].filters.push({
      field: null,
      condition: null,
      criteria: null
    });
    setState([...state]);
  };

  const removeFilter = (rowIndex, groupIndex) => {
    if (state[groupIndex].filters.length === 1) return;
    state[groupIndex].filters.splice(rowIndex, 1);
    setState([...state]);
  };

  const render = () => {
    return state.map((item, idx) => {
      return /*#__PURE__*/React.createElement(Card, {
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

  const [query, setQuery] = useState('');

  const buildQuery = () => {
    let filterQuery = '';

    for (let i = 0; i < state.length; i++) {
      const group = state[i];

      for (let j = 0; j < group.length; j++) {
        const filter = group[j];

        if (j === 0) {
          var _filter$field, _filter$condition, _filter$criteria;

          filterQuery += `"field.${(_filter$field = filter.field) === null || _filter$field === void 0 ? void 0 : _filter$field.value} ${(_filter$condition = filter.condition) === null || _filter$condition === void 0 ? void 0 : _filter$condition.value} \\"${(_filter$criteria = filter.criteria) === null || _filter$criteria === void 0 ? void 0 : _filter$criteria.value}"\\"`;
        } else {
          var _filter$field2, _filter$condition2, _filter$criteria2;

          filterQuery += `${join} "field.${(_filter$field2 = filter.field) === null || _filter$field2 === void 0 ? void 0 : _filter$field2.value} ${(_filter$condition2 = filter.condition) === null || _filter$condition2 === void 0 ? void 0 : _filter$condition2.value} \\"${(_filter$criteria2 = filter.criteria) === null || _filter$criteria2 === void 0 ? void 0 : _filter$criteria2.value}"\\"`;
        }
      }
    }

    console.log(filterQuery);
    setQuery(filterQuery);
  };

  useEffect(() => {
    buildQuery();
  }, [state]);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-900 pb-20"
  }, /*#__PURE__*/React.createElement(Header, {
    query: query
  }), /*#__PURE__*/React.createElement("div", {
    className: "container mt-52 mx-auto w-full"
  }, render(), /*#__PURE__*/React.createElement(Button, {
    text: "+ Add New gropup filter",
    type: "primary",
    handleClick: handleAddGroup,
    className: "px-2"
  })));
};

export { QueryBuilder, conjunctions };
//# sourceMappingURL=index.modern.js.map
