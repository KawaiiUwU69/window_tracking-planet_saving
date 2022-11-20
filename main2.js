function dateUpdate(){
    let date = new Date();
    return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()+'T'+date.toLocaleTimeString('it-IT');
};

let date = dateUpdate();

// async function getWindowData(url = 'https://durhack20221119161856.azurewebsites.net/api/GetSensorData?startDate='+date) {
//     const response =  await fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     })
//     .then((response) => response.json())
//     const filtered = await response.filter(
//         (element) => element.sensorID == 687114,
        
//     );
//     return filtered;
// };

setInterval(async function(url = 'https://durhack20221119161856.azurewebsites.net/api/GetSensorData?startDate='+date) {
    //fromnow
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
    //let filtered = getWindowData();
      
    console.log(filtered[0]);
    if (filtered[0]){
        console.log("is it true true? "+filtered[0].dataValue);
        // True is window is OPEN.
        if ("True|True".localeCompare(filtered[0].dataValue) == 0){
            console.log("IS Open!");
            const timer = document.getElementById("timer");
            const windowStatus = document.getElementById("windowStatus");
            windowStatus.innerHTML = "Window OPEN!!!";
            
            // starting Window-Open timer
            let now = new Date().getTime();
            let newDateObj = new Date().getTime();
            let intervalX = setInterval(function(){
                now = new Date.getTime();
                let distance = newDateObj - now;

                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                timer.innerHTML = minutes + "m " + seconds + "s ";

                //True if the timer ran out and the window is still open
                if (distance < 0 && "True|True".localeCompare(filtered[0].dataValue) == 0) {
                    windowStatus.innerHTML = "Window is still open. Close it - keep heat!";
                    setTimeout(function() { alert("Close the window!"); }, 1);
                    
                };
                //if distance >= 0 && closed: closed too early - dont suffocate ;(
                //use unchanged time - log what is avaliable
                }, 1000)
            


            // start timer
            // optional: if closed before timer ends -> say "Closed Early"
            // timer runs out - if closed -> say "Closed"; start the other timer 
        };
        date = dateUpdate();

    }
    // return filtered;
}, 1000);
setInterval()
