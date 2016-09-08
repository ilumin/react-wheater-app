import xhr from 'xhr';

export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  }
}

export function setSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp: temp
  }
}

export function setData(data) {
  console.log("SET DATA:", data);
  return {
    type: 'SET_DATA',
    data: data
  }
}

export function setDates(dates) {
  console.log("SET DATES:", dates);
  return {
    type: 'SET_DATES',
    dates: dates
  }
}

export function setTemps(temps) {
  console.log("SET TEMPS:", temps);
  return {
    type: 'SET_TEMPS',
    temps: temps
  }
}

export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  }
}

export function fetchData(url) {
  return function thunk(dispatch) {
    xhr({
      url: url
    }, function (err, data) {
      console.log("FETCH SUCCESS:", data);

      var body = JSON.parse(data.body);
      var list = body.list;
      var dates = [];
      var temps = [];
      for (var i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
      }

      dispatch(setData(body));
      dispatch(setDates(dates));
      dispatch(setTemps(temps));
      dispatch(setSelectedDate(''));
      dispatch(setSelectedTemp(null));
    });
  }
}
