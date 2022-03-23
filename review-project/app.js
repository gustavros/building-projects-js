//local reviews data

const reviews = [
    {
        id: 1,
        name: 'Lincoln Burrows',
        job: 'Web Design',
        text: 'Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.',
        img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        
    }, 
    {
        id: 2,
        name: 'Fernando Sacarone',
        job: 'Military',
        img: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: 'The military is the group or groups of people that are given power to defend something (mostly a country).',

    }, 
    {
        id: 3,
        name: 'Marrone Rows',
        job: 'Civil Engineering',
        img: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: 'Civil engineers create, improve and protect the environment in which we live.',

    },
    {
        id: 4,
        name: 'Theodoro ell',
        job: 'Actor',
        img: 'https://images.unsplash.com/photo-1514218698632-ef079aeae842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=571&q=80',
        text: "Actors express ideas and portray characters in theater, film, television, and other performing arts media."
    }
]

//select items

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

// select btns

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')


// set starting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function () {
    showPerson()
})

// show person based item

function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show the next review

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    
    showPerson();
})

//show the previous review

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson();
})

// random person review

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})


