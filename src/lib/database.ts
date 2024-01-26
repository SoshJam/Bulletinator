import clientPromise from "@/lib/mongodb";
import { Board, BoardError } from '@/lib/types';

import { MongoClient, Db, WithId, Document, ObjectId } from 'mongodb';

/* Get one board */
export async function getBoardById(id: string): Promise<Board | BoardError> {
    // Connect to MongoDB
    const client: MongoClient | undefined = await clientPromise;
    if (!client) throw new Error("Database connection unavailable.");

    const db: Db = client.db("bulletinator");
    
    // Attempt to get the board
    try {
        // Get the board
        const res: WithId<Document> | null = await db.collection('boards').findOne({ _id: new ObjectId(id) });
        if (!res) throw new Error("Database connection error.");
        
        // Extract the board info and return it
        const board: Board = {
            _id: res._id.toHexString(),
            title: res.title,
            items: res.items || []
        }

        return board;
    } catch (e) {
        // Return an error
        const res: BoardError = { error: "An error occurred while trying to fetch the board." };
        return res;
    }
}

/* Get all boards */
export async function getAllBoards(): Promise<Board[] | BoardError> {
    // Connect to MongoDB
    const client = await clientPromise;
    if (!client) throw new Error("Database connection unavailable.");

    const db = client.db("bulletinator");
    

    const boards = await db.collection('boards').find({ });
    try {
        // Get the boards
        const res: WithId<Document>[] = await db.collection('boards').find({}).toArray();

        // Extract and return the info
        const boards: Board[] = res.map((board: WithId<Document>) => ({
            _id: board._id.toHexString(),
            title: board.title,
            items: board.items || []
        }));

        return boards;
    } catch(e) {
        // Return an error
        const res: BoardError = { error: "An error occurred while trying to fetch the boards." };
        return res;
    }
}