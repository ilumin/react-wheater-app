
export function steSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  }
}

export function steSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp: temp
  }
}

export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  }
}
