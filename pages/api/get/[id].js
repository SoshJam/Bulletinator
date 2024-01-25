// Get one board
import { getBoardById } from "@/lib/database";

export default async function handler(req, res) {
    const { id } = req.query;
    const board = await getBoardById(id);
    if (!board) return res.status(404).json({ error: "Board not found." });
    if (board.error) return res.status(500).json({ error: board.error });
    return res.status(200).json(board);
}