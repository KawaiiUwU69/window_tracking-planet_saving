import fetch from "node-fetch";
let response =await fetch('https://www.imonnit.com/json/SensorDataMessages?sensorID=829993&fromDate=2022-11-19&toDate=2022-11-19', {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'APIKeyID': 'oTF7sTKoqA9S',
    'APISecretKey': 'K8m3phtlfC8YOpl0A0evN95rxWAJeSZ7'
    },
  body: JSON.stringify(data),
});

let result =await response.json();
alert(result);
