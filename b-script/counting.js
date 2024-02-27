const ccnt = document.body.querySelector('#cnt')
let num = 1

setInterval(() => {
    ccnt.textContent = num
    num += 1
}, 1000)