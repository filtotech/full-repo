import mongoose from "mongoose";
import 'dotenv/config';

const ConnectToDatabase = () => mongoose.
                            connect(process.env.MONGODB_URI as string).
                                then(()=>{
                                    console.log('Database Connection Established');
                                }).
                                    catch((error)=>{
                                        console.log('Error occured While Connecting to Database', error);
                                    });

