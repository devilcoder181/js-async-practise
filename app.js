"use strict"

// Old School XMLHTTP

// const request = new XMLHttpRequest();

// request.open('GET', 'https://thronesapi.com/api/v2/Characters');
// request.send();

// request.addEventListener('load', () => {
//     let r = request.responseText;
//     let data = JSON.parse(r);

//     let ul = document.createElement('ul');

//     data.forEach((e, i) => {
//         let li = document.createElement('li');
//         li.classList.add('list-group-item');
//         let liHTML = `<h4 class="text-primary">${e.fullName}</h4>
//                         <h5>${e.family}</h5>
//                         <img src="${e.imageUrl}" style="width:150px; height:150px;">`;
//         li.innerHTML = liHTML;
//         ul.appendChild(li);
//     })

//     document.body.appendChild(ul);
// })

// Promises

let renderDom = (target)=> {
    let ul = document.createElement('ul');

    target.forEach((e, i) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        let liHTML = `<h4 class="text-primary">${e.fullName}</h4>
                        <h5>${e.family}</h5>
                        <img src="${e.imageUrl}" style="width:150px; height:150px;">`;
        li.innerHTML = liHTML;
        ul.appendChild(li);
    })

    document.body.appendChild(ul);
}

const getGOTDetails = ()=> {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => {
        return res.json();
    }).then(data => {
        renderDom(data);
    })
}

getGOTDetails();


// Promise in action
const getPosition = function() {
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

getPosition().then(res=> console.log(res)).catch(err=> console.log(err))

// Aysnc Await

const getMyCountry = async function(country) {
    let res = await fetch(`https://restcountries.com/v2/name/${country}`)
    console.log(res)
}

getMyCountry('india')