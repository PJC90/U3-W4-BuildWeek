export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/me'

export const fetchUser = () => async (dispatch) => {
  try {
    let response = await fetch(baseEndpoint, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMjc5MWM1NWU3ZTAwMThmODNjNDciLCJpYXQiOjE2OTk4ODI4OTcsImV4cCI6MTcwMTA5MjQ5N30.kOr7iDAngb-ynvpkBFXSJFA4dTCuVin-ZGRTDWNQLGk',
      },
    })
    if (response.ok) {
      const data = await response.json()
      console.log('dati ricevuti', data)
      dispatch({ type: FETCH_USER_SUCCESS, payload: data })
    } else {
      throw new Error('errore recupero dati')
    }
  } catch (error) {
    console.log(error)
    dispatch({ type: FETCH_USER_FAILURE })
  }
}
