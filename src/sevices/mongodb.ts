import mongoose from 'mongoose';
export default function(){
    mongoose.connect(`${process.env.DB_MONGO}/${process.env.DB_NAME}`,  { useNewUrlParser: true });
    const db = mongoose.connection;
}