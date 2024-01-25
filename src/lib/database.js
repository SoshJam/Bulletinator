import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

/* Get one board */
export async function getBoardById(id) {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("bulletinator");
    
    let board;
    try {
        board = await db.collection('boards').findOne({ _id: new ObjectId(id) });
    }
    catch (e) {
        return { error: "An error occurred while trying to fetch the board." };
    }
    return board;
}

/* Get all boards */
export async function getAllBoards() {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("bulletinator");
    
    const boards = await db.collection('boards').find({ });
    return boards;
}