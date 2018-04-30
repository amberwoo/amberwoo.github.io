function onSuccess(pos) {
    console.log(pos)
}

function onError() {
    console.log("User chose not to share their location")
}

navigator.geolocation.getCurrentPosition(onSuccess, onError)
