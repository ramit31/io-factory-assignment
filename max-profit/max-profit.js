function maxProfitRec(timeLeft,earning,outArr,est) {
    if(earning===0) {
        console.log(`T:${outArr[0]}P:${outArr[1]}C:${outArr[2]}`);
        outArr[3]=true;
        return;
    }
    for(let i=0;i<est.length;i++) {
        let earned = 0, currTime = timeLeft, currEarn=earning;
        if(est[i].time<currTime) {
            currTime -=est[i].time;
            earned = currTime*est[i].cost;
            if(earned<=currEarn){
                outArr[i] +=1;
                currEarn -=earned;
                maxProfitRec(currTime,currEarn,outArr,est);
                outArr[i] -=1;
            }
        }
    }
    return;
}

function maxProfit(timeLeft,earning) {
    let outArr = [0,0,0,false];
    let est = [{time:5,cost:1500},{time:4,cost:1000},{time:10,cost:3000}];
    // if(timeLeft!==0) {
        maxProfitRec(timeLeft,earning,outArr,est);
        if(outArr[3]==false) console.log(`T:${outArr[0]}P:${outArr[1]}C:${outArr[2]}`);
    // }
    // if(timeLeft===0) console.log(`T:${outArr[0]}P:${outArr[1]}C:${outArr[2]}`);
}

//test cases
console.log(maxProfit(7,3000));
console.log(maxProfit(8,4500));
console.log(maxProfit(13,16500));

//additional test cases
console.log(maxProfit(0,0));
console.log(maxProfit(1,0));
console.log(maxProfit(0,1));
console.log(maxProfit(8,6000));
console.log(maxProfit(9,6000));
console.log(maxProfit(12,13500));

// input in node js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Input: ', inp => {
    console.log(maxProfit(...inp.split(" ").map(ele=>Number(ele))));
    readline.close();
  });