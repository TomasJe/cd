/*
Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:



    <h2> tag’as su tekstu;

        <p> tag’as su tekstu;

            <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;

                <p> tag’as su tekstu.*/

let main = document.querySelector("#main")


let header = document.createElement('h1');

let text = document.createTextNode ('Hello World!');

header.appendChild(text);

main.appendChild(header);

let paragraph = document.createElement('p');

paragraph.innerText = 'Hello World';

main.appendChild(paragraph);

let list = document.createElement('ul');

list.style['list-style-type'] = 'none';

main.appendChild(list);

for (let i = 1; i < 6; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = `img/${i}.png`;
    list.appendChild(img);
    list.appendChild(li);
}

let paragraphV2 = document.createElement('p');

paragraphV2.innerText = 'Hello World';

main.appendChild(paragraphV2);