const bidsArray = [];
let myStorage = window.localStorage;
localStorage.setItem('all-bids', JSON.stringify(bidsArray));
let storedBids = JSON.parse(localStorage.getItem("all-bids"));

document.getElementById('place-bid1').addEventListener('click', function(){pushBid('bid-text1')});
document.getElementById('place-bid2').addEventListener('click', function(){pushBid('bid-text2')});

function pushBid(id) {
    const bid = document.getElementById(id).value;
    bidsArray.push(bid);
    document.getElementById(id).value = '';
    printBids();
};

function printBids() {
    document.getElementById('bid-array').innerHTML = `
        <h3>${bidsArray}</h3>
    `;
};
