function dateUpdate(){
    let date = new Date();
    return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()+'T'+date.toLocaleTimeString('it-IT');
};

let date = dateUpdate();

// Getting data from the Open / Close sensor #3
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
    // True is window is OPEN.
    if (filtered[0]){
        console.log("is it true true? "+filtered[0].dataValue);
        // True is window is OPEN.
        if ("True|True".localeCompare(filtered[0].dataValue) == 0){
            console.log("IS Open!");
            const timer = document.getElementById("timer");
            timer.style.display = "block";
            const windowStatus = document.getElementById("windowStatus");
            windowStatus.innerHTML = "Window OPEN!!!";
            
            // starting Window-Open timer: for testing purposes set to 20 seconds
            let now = new Date().getTime();
            let newDateObj = new Date(now + 20000);
            let intervalX = setInterval(function(){
                now = new Date().getTime();
                let distance = newDateObj - now;

                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                timer.innerHTML = minutes + "m " + seconds + "s ";

                //True if the timer ran out and the window is still open
                if (distance < 0 && "True|True".localeCompare(filtered[0].dataValue) == 0) {
                    windowStatus.innerHTML = "Window is still open. Close it - keep heat!";
                    setTimeout(function() { alert("Close the window!"); }, 1);
                    timer.style.display = "none";
                };
                //Would check for window closing here - but no time ;(
                }, 1000)
        };
        date = dateUpdate();

    }
}, 1000);
setInterval()