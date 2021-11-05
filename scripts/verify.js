const { ethers } = require("ethers");

let sigData = "0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0"
let sigObject = "0x9fb83c0162cf58d1f08b85d2fa768832b3ed5791a6f779fd040cf25138a1d9cf104fea01864792abf32ac53fcac7816105a71158a1af67dcab90330f3daa0bf61c"

const main = async()=> {
    const signature = "0x528459e4aec8934dc2ee94c4f3265cf6ce00d47cf42bb106afda3642c72e25eb42544137118256121502784e5a6425e6183ca964421ecd577db6c66ba9bccdcf1b";
    console.log(ethers.utils.recoverAddress(sigData, sigObject));
    // '0xe20FB4e76aAEa3983a82ECb9305b67bE23D890e3'

}

main();