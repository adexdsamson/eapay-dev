import { createActions } from 'redux-actions'



export const { user, isloading, notify } = createActions({
  USER: (data) => ( data ),
  ISLOADING: (state) => (state),
  NOTIFY: (state) => (state)
})