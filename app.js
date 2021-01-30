
// Clock
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var timeEventRep = document.getElementById('timeEvent');
var lolcatImageJs = document.getElementById('lolcatImage');
var image = document.getElementsByTagName('img').src;
var party = document.getElementById('partyTimeButton');
var partyTime;
var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var evening = 18;


function displayClock () {

    var dateTime = new Date();
    var hour = dateTime.getHours(); // 0 - 23
    var minute = dateTime.getMinutes(); // 0 - 59
    var seconds = dateTime.getSeconds(); // 0 - 59
    var meridian = 'AM';
    


    if (hour == 0){
        hour = 12;
    } 
    if (hour >= 12){
        meridian = 'PM';
    }
    if (hour > 12){
        hour = hour - 12;
    }
    

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    seconds = (seconds < 10) ? '0' + seconds : seconds;



    var time = hour + ':' + minute + ':' + seconds + meridian + '!';

    var clock = document.getElementById('clock');
    clock.innerText = time;

    

};





function displaySetTimes () {
    

        var time = new Date().getHours();
        var messageText;
        var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        var timeEventRep = document.getElementById('timeEvent');
        var lolcatImageJs = document.getElementById('lolcatImage');

        if (time == partyTime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
            messageText = "Let's Party";
        } else if (time == wakeUpTime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
            messageText = "Wake Up!";
        } else if (time == lunchTime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
            messageText = "Let's have some lunch!";
        } else if (time == napTime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
            messageText = "Sleep tight!";
        } else if (time < 12){
            image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
            messageText = "Good morning!";
        } else if (time >= 18) {
            image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
            messageText = "Good evening!";
        } else {
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
            messageText = "Good afternoon!";
        }

        console.log(messageText);
        timeEventRep.textContent = messageText;
        lolcatImageJs.src = image; 

        displayClock();

}

displaySetTimes();
setInterval(displaySetTimes, 1000);

var wakeUp = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = () => {
    wakeUpTime = wakeUp.value;
}

wakeUp.addEventListener('change', wakeUpEvent);

var nap = document.getElementById('napTimeSelector');

var napTimeEvent = () => {
    napTime = nap.value;
}

nap.addEventListener('change', napTimeEvent);

var lunch = document.getElementById('lunchTimeSelector');

var lunchTimeEvent = () => {
    lunchTime = lunch.value;
}

lunch.addEventListener('change', lunchTimeEvent);  

var partyTimeEvent = function () {
    
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        party.textContent = "Party Over!";
        party.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        party.textContent = "Party Time!";
        party.style.backgroundColor = "#222";

    }
};
party.addEventListener('click', partyTimeEvent);



        
    
/*What I want to accomplish is when the current time is equal
to the wake up time, lunch time or nap time, the image should change
to a cat who is either hungry, waking up or going back to sleep. Also change 
the image when we click on the party button.

first select all elements to do with the times and select the image
element. 



Attach event handlers to the selected times the call back function will say the image
changes when it reaches this time
*/