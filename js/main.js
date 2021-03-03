const bidsArray = [];

document.getElementById('place-bid1').addEventListener('click', function(){pushBid('bid-text1')});
document.getElementById('place-bid2').addEventListener('click', function(){pushBid('bid-text2')});
document.getElementById('local-storage-btn').addEventListener('click', getFromLocal);

function pushBid(id) {
    const bid = document.getElementById(id).value;
    bidsArray.push(bid);
    document.getElementById(id).value = '';
    printBids();
    saveToLocal();
};

function printBids() {
    document.getElementById('bid-array').innerHTML = `
        <h3>${bidsArray}</h3>
    `;
};

function saveToLocal(){
    localStorage.setItem('all-bids', JSON.stringify(bidsArray));
    document.getElementById('alert-box').innerText = "Bid saved to local storage."
}

function getFromLocal(){
    let storedBids = localStorage.getItem("all-bids");
    let bidsArray2 = JSON.parse(storedBids);
    document.getElementById('bid-array').innerText = bidsArray2;
    document.getElementById('alert-box').innerText = "Bids have been retrieved from local storage." 
}