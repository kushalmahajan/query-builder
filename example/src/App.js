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
