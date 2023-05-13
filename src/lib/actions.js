function _setLoading(value) {
  return {
    type: 'SET_LOADING',
    payload: value,
  }
}

function _setMobileNavVisible(value) {
  return {
    type: 'SET_MOBILE_NAV_VISIBLE',
    payload: value,
  }
}

export { _setLoading, _setMobileNavVisible }
