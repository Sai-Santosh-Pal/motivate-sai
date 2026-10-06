const my_hackatime = fetch('https://https:hackatime.hackclub.com/api/v1/users/sai-santosh-pal/stats?start_date=2026-08-06&end_date=&features=&filter_by_project=&filter_by_category=&boundary_aware=true&total_seconds=true&no_ai_coding=true&test_param=true')
console.log(my_hackatime)


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

