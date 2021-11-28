var generateOTP = "";
for(let i=0; i<6; i++){
    var gen = Math.floor(Math.random() * 10)
    generateOTP+=gen;
}

// console.log(generateOTP);

module.exports = generateOTP;