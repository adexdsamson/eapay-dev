import { createActions } from 'redux-actions'



export const { user, isloading, error } = createActions({
  USER: (data) => ( data ),
  ISLOADING: (state) => (state),
  ERROR: (error) => (error)
})