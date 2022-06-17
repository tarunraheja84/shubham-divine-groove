// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tarun:Tarun%40123@cluster0.srw7o.mongodb.net/test', {
	dbName: 'Shubham',
	// useNewUrlParser: true,
	// useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to Shubham database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	fname: {
		type: String
	},
	lname: {
		type: String
	},
	city: {
		type: String
	},
});
const User = mongoose.model('users', UserSchema);
// User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
		console.log("result=",result);
        if (result) {
			delete result.password;
			resp.send(req.body);			
            console.log(result);
        } else {
            console.log("User already register");
        }
     } 
	 catch (e) {
		 console.log(e);
        resp.send("marunga  thappad");
    }
});

app.listen(5000);
