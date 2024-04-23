import { connect, connection } from "mongoose";

// Object of validation database created
const conn = {
    isConnection: false
}

export async function connectDB() {
    //Validation
    if(conn.isConnection) return;

    const db = await connect(process.env.MONGO_DB_URL);
    console.log(db.connection.db.databaseName);
    conn.isConnection = db.connections[0].readyState;
}

//Message:
connection.on('connected', () => {
    console.log('DATABASE is connected');
});

connection.on('error', (err) => {
    console.log('DATABASE connection error', err);
});