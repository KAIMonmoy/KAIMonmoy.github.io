var cd = new Countdown({
    cont: document.querySelector('.countdown'),
    date: {
        day: 28,
        month: 11,
        year: 2034,
        hour: 23,
        minute: 59,
        second: 59,
    },
    outputTranslation: {
        year: 'Years',
        week: 'Weeks',
        day: 'Days',
        hour: 'Hours',
        minute: 'Minutes',
        second: 'Seconds',
    },
    endCallback: function () {
        console.log('Ended!')
        document.querySelector('.title').textContent = "I'm Dead!";
        document.querySelector('.countdown').style.display = "none";
    },
    outputFormat: 'year|day|hour|minute|second',
});
cd.start();