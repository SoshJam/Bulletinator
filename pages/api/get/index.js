// Get all boards

export default async function handler(req, res) {
    const boards = await getAllBoards();
    if (boards.error) return res.status(500).json({ error: board.error });
    return res.status(200).json(boards);
}