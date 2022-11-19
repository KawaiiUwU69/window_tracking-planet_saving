let date = new Date();
let yyyy = date.getFullYear();
let mm = date.getMonth() + 1; // Months start at 0!
let dd = date.getDate();
    
let hh = date.toLocaleTimeString('it-IT');

setInterval(async function(url = `https://durhack20221119161856.azurewebsites.net/api/GetSensorData?startDate=${yyyy}-${mm}-${dd}T${hh}`) {
    const response =  await fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then((response) => response.json())
    const filtered = await response.filter(
        (element) => element.sensorID == 687114,
        
    );
      
    console.log(filtered[0]);
    
    // return filtered;
}, 1000);
    setInterval()
