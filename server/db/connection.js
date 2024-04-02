const mongoose = require('mongoose');

const db = 'mongodb+srv://LensFlare:sVoNkFT2suGR5jcO@cluster0.i6nsmo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(db).then(()=>{
    console.log('database connected')
}).catch((e)=>{
    console.log(e,'<=error')
})