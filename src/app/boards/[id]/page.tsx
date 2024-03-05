import styles from "./page.module.scss";
import type { Metadata, ResolvingMetadata } from "next";
import { getBoardById } from "@/lib/database";
import { Board, DatabaseError, isDatabaseError } from '@/lib/types';

export async function generateMetadata(
    { params }: Readonly<{ params: { id: string } }>,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const board: Board | DatabaseError = await getBoardById(params.id);
    
    if (isDatabaseError(board))
        return { title: "Error | Bulletinator" }

    return {
        title: `${board.title} | Bulletinator`,
    };
}

export default async function BoardPage({ params }: Readonly<{ params: { id: string } }>) {
    const board: Board | DatabaseError = await getBoardById(params.id);

    return (
        <main>
            <h1>Board {isDatabaseError(board) ? "Error" : board.title}</h1>
        </main>
    );
}