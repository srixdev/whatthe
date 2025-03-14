const mongoose = require("mongoose");

const DB_URI = "mongodb+srv://Mykolnikov:<db_password>@blockmanvestaex.kjfpj.mongodb.net/?retryWrites=true&w=majority&appName=BlockmanVestaex";

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));
