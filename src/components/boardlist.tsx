'use client'

import styles from "./boardlist.module.scss";
import { useState, useEffect } from "react";
import { Board } from '@/lib/types';
import Link from "next/link";

export function BoardList({ params }: Readonly<{ params: { id: string } }>) {

    const [boards, setBoards] = useState<Board[]>([]);

    const getBoardList = async (email: string) => fetch(`/api/get-boards/user/${email}`) // Get the list of board IDs
        .then(response => response.json()) // Parse to a JSON list of board IDs
        .then((boardIds: string[]) => Promise.all( // Get the info of each board
            boardIds.map(id => fetch(`/api/get-boards/${id}`) // Get the board info
                .then(response => response.json()) // Parse to a JSON board
            )
        ))
        .then((boards: Board[]) => setBoards(boards)) // Set the state

    useEffect(() => {
        getBoardList("john@example.com"); // TODO: Replace with user email after authentication is implemented
    });

    return (
        <ul>
            {boards.map((board: Board) => (
                <li key={board._id}>
                    <Link href={`/boards/${board._id}`}>
                        {board.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}