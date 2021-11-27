var generatedOTP = []
for(let i=0; i<6; i++){
    var gen = Math.floor(Math.random() * 10);
    generatedOTP.push(gen);
}
// console.log(generatedOTP);
module.exports = generatedOTP;