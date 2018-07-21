import React from 'react'
import {Route, Switch} from 'react-router-dom'

import StoreInfo from './StoreInfo'
import StoreBalance from './StoreBalance'
// import {StoreStats} from './StoreStats'
import StoreInfoEdit from './StoreInfoEdit'

const StoreProfile = () => {
  return (
    <div className='storeprofile'>
      <h2>Your Store Stats</h2>
      <Switch>
        <Route path='/store/:id/edit' component={StoreInfoEdit} />
        <Route path='/store/:id' component={StoreInfo} />
      </Switch>
      <Route path='/store/:id' component={StoreBalance} />
      {/* <Route path='/store/:id' component={StoreStats} /> */}

    </div>
  )
}

export default StoreProfile
