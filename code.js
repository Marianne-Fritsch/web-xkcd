const XKCD = "https://xkcd.now.sh/?comic="

// write your code here


//1
const num = document.getElementById("num");
const xkcd = document.getElementById("xkcd");

const fetchIssue = (n) => {
    return fetch(XKCD + n).then(response => {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
        else { console.error("Problem"); }
    }).then((data) => {
        console.log("dans le second then");
        console.log(data);

        console.log(`Image num : ${data.num}`);
        num.innerText = data.num;

        xkcd.innerText = fetch(data.img);
    })
};

fetchIssue(4);

//1.b

const reset = document.getElementById("reset")

const fetchIssuel = () => { return fetchIssue('latest') }

reset.addEventListener("click", fetchIssuel)

