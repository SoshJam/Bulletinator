import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Handle different HTTP methods
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json({ message: 'Hello from the API!' });
    } else if (req.method === 'POST') {
      // Handle POST request
      const { data } = req.body;
      res.status(200).json({ message: `Received data: ${data}` });
    } else {
      // Handle other HTTP methods
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}