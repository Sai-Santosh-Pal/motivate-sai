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


var senderName = "Remind Sai"
var message = "Code Sai Code! you must come to phantom <3"

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
    notify(senderName, message)
})


function moreoptions() {
    const form = document.getElementById('form')
    form.classList.remove("h-[0px]")
    form.classList.remove("opacity-0")
    form.classList.add("opacity-100")
    form.classList.add("h-[200px]")
    // form.classList.add("items-center")
    form.classList.add("flex")
    // form.classList.add("mb-5")
    // form.classList.add("mt-2")
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    const name = document.getElementById("name").value
    const msg = document.getElementById("msg").value
    senderName = name
    message = msg
    alert('your details are now updated!!')
})

function notify(name, msg) {
    console.log(name + msg + "sending")
    webhookURl = "https://discord.com/api/webhooks/1557323258766819398/3_lOh2QWNYJX2xEVP3-iGCtghDcJ1LCSnBWsLauBmoT5SiEFTCxxxbdwnVMkWwR55okT"
    async function send() {
        const text = {
            username: "Code Sai Code!",
            avatar_url: "https://avatars.slack-edge.com/2025-11-01/9824931289556_ea679b58cdb3c18ac186_192.jpg",
            content: "Reminder from **" + name + '** - "' + msg +'"'
        }
        try {
            const response =  await fetch(webhookURl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(text)
            })
            if (response.ok) {
                console.log('sent')
            }
            else {
                console.log('error ' + response.statusText)
            }
        } catch (error) {
            console.log(error)
        }

    }
    send()
}


