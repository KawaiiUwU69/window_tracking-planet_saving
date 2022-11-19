function dateUpdate(){
    let date = new Date();
    return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()+'T'+date.toLocaleTimeString('it-IT');
};

let date = dateUpdate();

setInterval(async function(url = 'https://durhack20221119161856.azurewebsites.net/api/GetSensorData?startDate='+date) {
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
    if (filtered[0]){
        date = dateUpdate()
    }
    // return filtered;
}, 1000);
setInterval()

