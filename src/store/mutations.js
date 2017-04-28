import * as types from './mutation-types'

export const mutations = {
  [types.GET_USER] (state, user_payload) {
    state.user = user_payload
  },
  [types.FETCH_ALL_POLLS] (state, polls_payload) {
    state.polls = polls_payload
  },
  [types.FETCH_POLL_BY_ID] (state, poll_payload) {
    state.poll = poll_payload
  },
  [types.VOTE] (state, vote_payload) {
    state.poll = vote_payload
  },
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  }
}
