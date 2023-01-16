function maxProfitRec(timeLeft, earning, outBuiltArr, outEarnBuilt, est) {
  for (let i = 0; i < est.length; i++) {
    let currTime = timeLeft;
    if (currTime - est[i].time <= 0) {
      if (earning >= outEarnBuilt.earning) {
        // console.log("Possible earnings:", earning, outBuiltArr);
        if (outEarnBuilt.built.length === 0)
          outEarnBuilt.built.push([...outBuiltArr]);
        else if (
          outEarnBuilt.earning === earning &&
          outEarnBuilt.built.length > 0
        ) {
          let flag = true;
          for (let j = 0; j < outEarnBuilt.built.length; j++) {
            if (
              outEarnBuilt.built[j][0] === outBuiltArr[0] &&
              outEarnBuilt.built[j][1] === outBuiltArr[1] &&
              outEarnBuilt.built[j][2] === outBuiltArr[2]
            ) {
              flag = false;
              break;
            }
          }
          if (flag) outEarnBuilt.built.push([...outBuiltArr]);
        } else if (outEarnBuilt.earning < earning) {
          outEarnBuilt.built = [];
          outEarnBuilt.built.push([...outBuiltArr]);
        }
        outEarnBuilt.earning = earning;
      }
    } else {
      currTime -= est[i].time;
      earning += currTime * est[i].cost;
      outBuiltArr[i] += 1;
      maxProfitRec(currTime, earning, outBuiltArr, outEarnBuilt, est);
      outBuiltArr[i] -= 1;
      earning -= currTime * est[i].cost;
    }
  }
  return;
}

function maxProfit(timeLeft) {
  let outBuiltArr = [0, 0, 0];
  let outEarnBuilt = { earning: 0, built: [] };
  let est = [
    { time: 5, cost: 1500 },
    { time: 4, cost: 1000 },
    { time: 10, cost: 3000 },
  ];
  maxProfitRec(timeLeft, 0, outBuiltArr, outEarnBuilt, est);
  if (outEarnBuilt["earning"] === 0) {
    console.log(`T:${0}P:${0}C:${0}`);
  } else {
    console.log("Earnings:", outEarnBuilt.earning);
    for (let i = 0; i < outEarnBuilt.built.length; i++) {
      console.log(
        `T:${outEarnBuilt.built[i][0]}P:${outEarnBuilt.built[i][1]}C:${outEarnBuilt.built[i][2]}`
      );
    }
  }
}

//test cases
maxProfit(7);
maxProfit(8);
maxProfit(13);

//additional test cases
maxProfit(0);
maxProfit(1);
maxProfit(4);
maxProfit(8);
maxProfit(9);
maxProfit(12);
maxProfit(15);

// for input in node js uncomment below lines

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Input: ", (inp) => {
// maxProfit(inp.split(" ").map((ele) => Number(ele))[0]);
//   readline.close();
// });
