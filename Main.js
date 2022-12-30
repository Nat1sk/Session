var AboutMe = document.querySelector('#AboutMe');
var Works = document.querySelector('#Works');
var Back = document.querySelector('#Back');

AboutMe.addEventListener("click", ShowAM);
Works.addEventListener("click", ShowWorks);
Back.addEventListener("click", ShowVid);

const getAM = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

const getWorks = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

function ShowAM(){
    document.getElementById('container').innerHTML = "";
    document.getElementById('video').innerHTML = "";
    document.getElementsByClassName('container')[0].style.display = "flex"
    getAM('Me.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const block = document.createElement('div')
            const fact = data[key].Fact
            const img = data[key].Kartinka


            block.innerHTML = `<div class="block">
                <img src="${img}" width=700/>
                <h2>FACT: ${fact}</h2>
            </div>`
            container.append(block)
        }
    })
}

function ShowWorks(){
    document.getElementById('container').innerHTML = "";
    document.getElementById('video').innerHTML = "";
    document.getElementsByClassName('container')[0].style.display = "flex";
    getWorks('works.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const div = document.createElement('div')
            const name = data[key].Name
            const screen = data[key].Screen
            const desc = data[key].Descriprion
            const link = data[key].Link


            div.innerHTML = `<div class="block">
                <img src="${screen}" width=1000/>
                <h2>This is: ${name}</h2>
                <h2>Descpription: ${desc}</h2>
                <a href="${link}">Link</a>
                <div class="header">
                <input type="text" id="Inp">
                <button class="button2" id="comment">Comment</button>
                </div>
            </div>`
            container.append(div)
        }
    })
}

function ShowVid(){
    document.getElementById('container').innerHTML = "";
    document.getElementById('video').innerHTML = `<div class="VIDcontainer" id="video">
    <video src="/images/vid.mp4" controls class="video"></video>
    </div>`
}


var Inp = document.querySelectorAll('.Inp');
var comment = document.querySelectorAll('.comment');

comment.addEventListener("click", ADDcomm);

function ADDcomm(){
    document.getElementById('container').innerHTML = "";
    const ComBlock = document.createElement('div');
    ComBlock.innerHTML = `<div class="block">;
    <h2>${comment}</h2>
    </div>`

    container.append(ComBlock)
}