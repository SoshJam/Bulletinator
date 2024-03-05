import { NextApiRequest, NextApiResponse } from "next";
import { getAllBoards } from "@/lib/database";
import { Board, DatabaseError, isDatabaseError } from "@/lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get all the boards
    const boards: Board[] | DatabaseError = await getAllBoards();

    // If there's an error, return the JSON straightaway
    if (isDatabaseError(boards)) return res.status(500).json(boards);

    // Otherwise return the boards
    return res.status(200).json(boards);
}