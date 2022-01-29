const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI)
    } catch (error) {
        console.log(error);
        process.off(1)
    }
}