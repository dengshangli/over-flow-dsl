import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

const TestOverFlow = ({ row, lineHeight, backgroundColor, children }) => {
  const textMaxheight = lineHeight * row
 
  return (
    <div 
      className="textOverFlowContainer"
      style={{ 
        lineHeight: `${lineHeight}px`,
        maxHeight: textMaxheight,
        backgroundColor,
      }}
    >
      <div className="before" style={{ height: textMaxheight, }} />
      <div className="text">
        {children}
      </div>
      <div className="after" style={{ height: lineHeight, backgroundColor }}>...</div>
    </div>
  )
}

TestOverFlow.propTypes = {
  // 超过多少行显示省略
  row: PropTypes.number,
  // 文字的行高,传数字，默认单位为px
  lineHeight: PropTypes.number,
  // 文字背景色，默认为白色
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired
}

TestOverFlow.defaultProps = {
  row: 1,
  lineHeight: 20,
  backgroundColor: '#fff',
}

export default TestOverFlow
