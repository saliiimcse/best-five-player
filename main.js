// get player and show player function 
function getID(id){
    const idTag = document.getElementById(id);
    const idTagValu = idTag.innerText;
    console.log(idTagValu);
    
    const playerList = document.getElementById('player-list')
    const neweList = document.createElement('p');
    neweList.textContent = idTag.innerText;
    playerList.appendChild(neweList);
    // player count
    document.getElementById('player-count-show').innerText = playerList.childElementCount;
}
// player price calculate
document.getElementById('btn-player-calculate').addEventListener('click', function(){
    const playerPrice = document.getElementById('player-price');
    const playerPriceValue = playerPrice.value;
    const playerCountity = document.getElementById('player-list').childElementCount;
    
    const playerPriceCount = playerPriceValue * playerCountity;
    
    document.getElementById('player-expenses').innerText = playerPriceCount;
    playerPrice.value = '';
})
//total price calculate
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const manager = document.getElementById('manager-input-price');
    const managervalue = parseFloat(manager.value);
    const coach = document.getElementById('coach-input-price');
    const coachvalue = parseFloat(coach.value);
    const playercost = document.getElementById('player-expenses').innerText;
    const playercostValue = parseFloat(playercost);
    const totalSum = playercostValue + managervalue + coachvalue;
    document.getElementById('overall-total-coast').innerText = totalSum;
    manager.value = '';
    coach.value = '';
})


// player-1
document.getElementById('button-1').addEventListener('click',function(){
    getID("player-1");
})
// player-2
document.getElementById('button-2').addEventListener('click',function(){
    getID("player-2");
})
// player-3
document.getElementById('button-3').addEventListener('click',function(){
    getID("player-3");
})
// player-4
document.getElementById('button-4').addEventListener('click',function(){
    getID("player-4");
})
// player-5
document.getElementById('button-5').addEventListener('click',function(){
    getID("player-5");
})
// player-6
document.getElementById('button-6').addEventListener('click',function(){
    getID("player-6");
})