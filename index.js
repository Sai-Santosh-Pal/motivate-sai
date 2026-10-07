async function setCounter() {
        const count = await fetch('https://counter.sai-santosh-pal.hackclub.app/')
        const number = await count.text()
        const counter = document.getElementById('count')
        counter.innerText = 'so far this button has been clicked ' + number + ' times'
    }
setCounter()

async function get_progress() {
    const data = await fetch('https://hackatime.hackclub.com/api/v1/users/sai-santosh-pal/stats?start_date=2026-08-06&features=&filter_by_project=&filter_by_category=&boundary_aware=true&total_seconds=true&no_ai_coding=true&test_param=true')
    // console.log(time)
    // console.log(dataObj)
    const dataObj = await data.json()
    // console.log(dataObj)
    const time = await (Number(dataObj["total_seconds"]) / 3600)
    const timeDone = time - 4 // -4 for my other projects which arent shipd to phantom
    const percentage = await (timeDone / 180) * 100
    console.log(percentage)
    const progbar = await document.getElementById("progress")
    const className = await "w-[" + Math.round((percentage*10)/10) + "%]"
    setTimeout(() => {
    progbar.classList.add(className)
    }, 200)
    const progtext = await document.getElementById("progtext")
    progtext.innerText = await Math.round(timeDone*10)/10 + " hours / 180 hours"
    const today = new Date()
    const lastDate = new Date("2026-12-31")
    const timeLeft = Math.ceil((lastDate-today) / (1000*60*60*24))
    const timetext = document.getElementById("timeleft")
    timetext.innerText =  timeLeft + " days left"
}

get_progress()


const clicker = document.getElementById('clicker')
const shadow1 = document.getElementById('shadow1')
const shadow2 = document.getElementById('shadow2')
const shadow3 = document.getElementById('shadow3')
const shadow4 = document.getElementById('shadow4')

clicker.addEventListener('click', () => {
    shadow1.classList.remove('mb-[-150px]')
    shadow1.classList.add('mb-[-180px]')

    shadow2.classList.remove('mb-[-150px]')
    shadow2.classList.add('mb-[-180px]')

    shadow2.classList.remove('mb-[-150px]')
    shadow2.classList.add('mb-[-180px]')

    shadow3.classList.remove('mb-[-150px]')
    shadow3.classList.add('mb-[-180px]')

    shadow4.classList.remove('mb-[-150px]')
    shadow4.classList.add('mb-[-180px]')

    async function countUpdate() {
        const count = await fetch('https://counter.sai-santosh-pal.hackclub.app/1')
        const number = await count.text()
        const counter = document.getElementById('count')
        counter.innerText = 'so far this button has been clicked ' + number + ' times'
    }
    countUpdate()
    setTimeout(() => {
    shadow1.classList.remove('mb-[-180px]')
    shadow1.classList.add('mb-[-150px]')

    shadow2.classList.remove('mb-[-180px]')
    shadow2.classList.add('mb-[-150px]')

    shadow2.classList.remove('mb-[-180px]')
    shadow2.classList.add('mb-[-150px]')

    shadow3.classList.remove('mb-[-180px]')
    shadow3.classList.add('mb-[-150px]')

    shadow4.classList.remove('mb-[-180px]')
    shadow4.classList.add('mb-[-150px]')
    }, 200)

    
})

