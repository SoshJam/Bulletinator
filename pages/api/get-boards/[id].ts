import { NextApiRequest, NextApiResponse } from "next";
import { getBoardById } from "@/lib/database";
import { Board, DatabaseError, isDatabaseError } from "@/lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get the Board ID from the URL slug
    const { id } = req.query as { id: string };

    // Get the board from the query
    const board: Board | DatabaseError = await getBoardById(id);

    // If there's an error, return the JSON straightaway
    if (isDatabaseError(board)) return res.status(500).json(board);

    // Otherwise return the boards
    return res.status(200).json(board);
}