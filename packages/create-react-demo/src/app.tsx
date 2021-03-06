import * as React from 'react'
import { Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from '@/store'
import Home from '@/pages/Home'

const history = createBrowserHistory()


export default function Root(props: any) {
    return(
      <Provider store={store}>
        <Router history={history}>
            <Switch>
            <Route
                path="/"
                render={(props:any) => <Home {...props} />}
            />
               <Route
                path="/home"
                render={(props:any) => <Home {...props} />}
            />
            </Switch>
        </Router>
        </Provider>
    )
};