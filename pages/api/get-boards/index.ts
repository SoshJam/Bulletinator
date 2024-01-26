import { NextApiRequest, NextApiResponse } from "next";
import { getAllBoards } from "@/lib/database";
import { Board, BoardError, isBoardError } from "@/lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get all the boards
    const boards: Board[] | BoardError = await getAllBoards();

    // If there's an error, return the JSON straightaway
    if (isBoardError(boards)) return res.status(500).json(boards);

    // Otherwise return the boards
    return res.status(200).json(boards);
}