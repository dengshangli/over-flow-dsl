'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestOverFlow = function TestOverFlow(_ref) {
  var row = _ref.row,
      lineHeight = _ref.lineHeight,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children;

  var textMaxheight = lineHeight * row;

  return _react2.default.createElement(
    'div',
    {
      className: 'textOverFlowContainer',
      style: {
        lineHeight: lineHeight + 'px',
        maxHeight: textMaxheight,
        backgroundColor: backgroundColor
      }
    },
    _react2.default.createElement('div', { className: 'before', style: { height: textMaxheight } }),
    _react2.default.createElement(
      'div',
      { className: 'text' },
      children
    ),
    _react2.default.createElement(
      'div',
      { className: 'after', style: { height: lineHeight, backgroundColor: backgroundColor } },
      '...'
    )
  );
};

TestOverFlow.propTypes = {
  // 超过多少行显示省略
  row: _propTypes2.default.number,
  // 文字的行高,传数字，默认单位为px
  lineHeight: _propTypes2.default.number,
  // 文字背景色，默认为白色
  backgroundColor: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]).isRequired
};

TestOverFlow.defaultProps = {
  row: 1,
  lineHeight: 20,
  backgroundColor: '#fff'
};

exports.default = TestOverFlow;