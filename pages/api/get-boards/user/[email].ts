import { NextApiRequest, NextApiResponse } from "next";
import { getBoardsByEmail } from "@/lib/database";
import { DatabaseError, isDatabaseError } from "@/lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get the Board ID from the URL slug
    const { email } = req.query as { email: string };

    // Get the board from the query
    const boardIds: string[] | DatabaseError = await getBoardsByEmail(email.replace(/%40/g, '@'));

    // If there's an error, return the JSON straightaway
    if (isDatabaseError(boardIds)) return res.status(500).json(boardIds);

    // Otherwise return the boards
    return res.status(200).json(boardIds);
}