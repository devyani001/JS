const button = document.getElementById('get-location-button');

// user ki location track is asynchronous task, quki instantly tumhari lacation fetch nhi hogi... 


async function getData(lat, long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5f424209e3714cdb944110759251707&q=${lat},${long}&aqi=yes`
    );

    return await promise.json();
}


async function getLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude)
    console.log(result);
}


function failedToGet() {
    console.log("There was some issue");
}



button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
})