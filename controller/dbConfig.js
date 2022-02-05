const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017")
    const db = mongoose.connection
    db.once('open' , () => console.log('✅ 몽고DB서버 연결완료'))
    db.on('error' , () => console.log('❌ 몽고DB 서버 연결안됨'))
}