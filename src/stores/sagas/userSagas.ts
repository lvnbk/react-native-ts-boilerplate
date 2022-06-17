import { takeEvery } from 'redux-saga/effects'
import { saveUser } from '../slices/user.slice'

function* getUserProfile() {
  try {
    // yield call()
  } catch (error) {}
}

export default function* userSagas() {
  yield takeEvery(saveUser, getUserProfile)
}
