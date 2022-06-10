
import mongoose from 'mongoose';



const mongodb = "mongodb+srv://sachin:kharvi25@cluster0.drmis.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>app.listen(PORT,console.log(`Server running on ${PORT}`))).catch(err=>console.log(err));
