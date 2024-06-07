//bot token
var telegram_bot_id = "6525316405:AAEf-v78-QqaN5aI4LSs9b5EKmA0aGvKr94";
//chat id
var chat_id = 798615127;
var UName, UCountry, UMessage, UStars;
var ready = function () {
    UName = document.getElementById("name").value;
    UCountry = document.getElementById("country").value;
    UStars = document.getElementById("stars").value;
    UMessage = document.getElementById("message").value;
    message = "Name: " + UName + "\nCountry: " + UCountry + "\nStars: " + UStars + "\nMessage:" + UMessage;
};
var review = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("stars").value = "";
    document.getElementById("message").value = "";
    return false;
};