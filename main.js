
async function getData(url = 'https://durhack20221119161856.azurewebsites.net/api/GetSensorData?startDate=2022-11-19T18:30') {
    const response =  await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      const filtered = await response.filter(
        (element) => element.sensorID == 829993
      );
      console.log(filtered);

    };

console.log(getData());
