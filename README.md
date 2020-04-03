### 安装
```javascript
npm i over-flow-dsl --save
```

### 使用
```javascript
import React from 'react';
import OverFlowDsl from 'over-flow-dsl';
import styles from './App.less';

function App() {
  return (
    <div className={styles.app}>
      <OverFlowDsl row={3} lineHeight={30} backgroundColor={'red'}>
        csdvsdvsdvcsdvsdvsdvcsdvsdvsdvcsdvsdvsdvcsdvsdvsdv
        csdvsdvsdvcsdvsdvsdvcsdvsdvsdvcsdvsdvsdvcsdvsdvsdv
      </OverFlowDsl>
    </div>
  );
}

export default App;
```

### API



属性 | 说明 | 类型 | 默认值
---|---|---|---
row | 超过多少行显示省略 | number | 1
lineHight | 文字的行高，默认单位px | number | 20
backgroundColor | 文字背景色 | string | #fff

