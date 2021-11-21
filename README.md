# query-builder

> dynamic query builder

[![NPM](https://img.shields.io/npm/v/query-builder.svg)](https://www.npmjs.com/package/query-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save query-builder
```

## Usage

```jsx
import React from 'react'

import { QueryBuilder } from 'query-builder'
import 'query-builder/dist/index.css'

const App = () => {
  return (
    <QueryBuilder
      handleBack={() => alert('fired')}
      handleFinish={(query) => alert(JSON.stringify(query))}
    />
  )
}

export default App

```

## License

MIT © [kushalmahajan](https://github.com/kushalmahajan)
