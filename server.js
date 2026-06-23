const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let feedbacks = [
{
id:1,
name:"Rahul",
course:"Python",
rating:5,
feedback:"Excellent course"
}
];

// GET
app.get("/feedbacks",(req,res)=>{
res.json(feedbacks);
});

// POST
app.post("/feedbacks",(req,res)=>{

const {name,course,rating,feedback}=req.body;

if(!name || !course || !rating || !feedback){
return res.status(400).json({
message:"All fields are required"
});
}

const newFeedback={
id:Date.now(),
name,
course,
rating,
feedback
};

feedbacks.unshift(newFeedback);

res.status(201).json(newFeedback);

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});