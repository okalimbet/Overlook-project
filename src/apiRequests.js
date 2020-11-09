let apiRequest = {};

apiRequest.getHotelData = getHotelData;
apiRequest.makeAPostRequest = makeAPostRequest;
apiRequest.makeADeleteRequest = makeADeleteRequest;

function getHotelData(url, dataType) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data[dataType])
    .catch(error => console.log(error));
}

function makeAPostRequest(url, dataToPost) {
  console.log(dataToPost)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToPost),
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

function makeADeleteRequest(url, dataToDelete) {
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToDelete),
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}
//-------Reference "POST"--------//
//  {
//     "userID": 48,
//     "date": "2019/09/23",
//     "roomNumber": 4
//  }
//-------Reference "DELETE"-----//
//  {
//    id: 12085397154
//  }

export default apiRequest;
