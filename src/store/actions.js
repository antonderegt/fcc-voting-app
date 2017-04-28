import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get(`/isauth`)
  .then( response => {
    console.log(`Received user data: ${response.data}`)
    commit(types.GET_USER, response.data)
  })
  .catch( error => {
    console.log(error)
  });
}

export const fetchAllPolls = ({commit}) => {
  axios.get(`/api/polls`)
  .then( response => {
    console.log(`Recieved polls: ${response.data}`)
    commit(types.FETCH_ALL_POLLS, response.data)
  })
  .catch( error => {
    console.log(error)
  })
}

export const fetchPollById = (({commit}, id) => {
  axios.get(`/api/polls/${id}`)
  .then( response => {
    console.log(`Received poll: ${response.data}`)
    commit(types.FETCH_POLL_BY_ID, response.data)
  })
  .catch( error => {
    console.log(error)
  })
})

export const vote = (({commit}, id, option) => {
  axios.get(`/api/polls/${id}/${option}`)
  .then( response => {
    console.log(`Voted: ${response.data}`);
    commit(types.VOTE, response.data)
  })
  .catch( error => {
    console.log(error)
  })
})

export const getCount = ({commit}) => {
  fetch(`/api/count`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_COUNT, json))
}

export const incCount = ({commit}, count_payload) => {
  fetch(`/api/count`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ count: ++count_payload })
  })
  .then(response => response.json())
  .then(json => commit(types.INC_COUNT, json))
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
