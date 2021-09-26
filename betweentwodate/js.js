setInterval(function(){

    // ALGORITHM TO GET ELAPSED TIME BETWEEN TWO DATE
    let today = new Date();
    let lastRelapse = new Date('August 25, 2021 01:00:00');


    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;


    let time = today - lastRelapse;
    time = Math.floor(time / 1000);

    if (time > 86400){
        days = Math.floor(time / 86400);
        time -= (days * 86400);
    }

    if (time > 3600){
        hours = Math.floor(time / 3600);
        time -= (hours * 3600);
    }

    if (time > 60){
        minutes = Math.floor(time / 60);
        time -= (minutes * 60);
    }

    seconds = time;

    let output = `${days} days  ${hours} hours  ${minutes} minutes  ${seconds} seconds`;
    console.log(output);


    // JS KODE NEEDED FOR THIS HTML

    // Cought element
    let timeHtml = document.getElementById('time');
    timeHtml.innerText = output;

}, 1000);
