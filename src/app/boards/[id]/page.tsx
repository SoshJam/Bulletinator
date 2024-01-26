import styles from "./page.module.scss";
import type { Metadata, ResolvingMetadata } from "next";
import { getBoardById } from "@/lib/database";
import { Board, BoardError, isBoardError } from '@/lib/types';

export async function generateMetadata(
    { params }: Readonly<{ params: { id: string } }>,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const board: Board | BoardError = await getBoardById(params.id);
    
    if (isBoardError(board))
        return { title: "Error | Bulletinator" }

    return {
        title: `${board.title} | Bulletinator`,
    };
}

export default async function BoardPage({ params }: Readonly<{ params: { id: string } }>) {
    const board: Board | BoardError = await getBoardById(params.id);

    return (
        <main>
            <h1>Board {isBoardError(board) ? "Error" : board.title}</h1>
        </main>
    );
}