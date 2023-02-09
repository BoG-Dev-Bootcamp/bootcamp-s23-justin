import figlet from "figlet";
import axios from "axios";

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let rNum = getRandom(1, 1009);

async function getRandPokemon(num) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + num;
    try {
        axios.get(url)
        .then(function (response) {
            let name = response.data.name;
            figlet.text(name, {
                font: '3D-ASCII'
            }, function (err, data) {
                if (err) {
                    console.log('There was an error');
                    console.dir(err);
                    return;
                }
                console.log(data);
            })
        })
    } catch(error) {
        console.log(error);
    }
}
getRandPokemon(rNum)