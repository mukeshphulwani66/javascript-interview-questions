


const newYear = new Date('2024-01-01 12:00:00 AM')
// const newYear = new Date('2023-11-05 02:13:00 PM')

const countDownTimer = setInterval(function () {
    const now = new Date()

    let distance = newYear - now
    if (distance <= 0) {
        clearInterval(countDownTimer)
        document.getElementById("countdown").innerHTML = 'Happy new Year'
    } else {
        const days = Math.floor(distance / (24 * 60 * 60 * 1000))
        distance = distance - (days * 24 * 60 * 60 * 1000)

        const hours = Math.floor(distance / (60 * 60 * 1000))
        distance = distance - (hours * 60 * 60 * 1000)

        const mins = Math.floor(distance / (60 * 1000))
        distance = distance - (mins * 60 * 1000)

        const secs = Math.floor(distance / 1000)
        document.getElementById("countdown").innerHTML = `${days} Days ${hours} hours ${mins} mins ${secs} sec`
    }



}, 1000)









