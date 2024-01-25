import styles from "./page.module.scss";
import type { Metadata, ResolvingMetadata } from "next";
import { getBoardById } from "@/lib/database";

type Board = { _id: string; title: string; items: []; error: string };

export async function generateMetadata(
    { params }: Readonly<{ params: { id: string } }>,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const board: Board = await getBoardById(params.id);
    
    if (!board) {
        throw new Error("Board not found");
    }

    if (board.error) {
        return { title: "Error | Bulletinator" }
    }

    return {
        title: `${board.title} | Bulletinator`,
    };
}

export default async function BoardPage({ params }: Readonly<{ params: { id: string } }>) {
    const board: Board = await getBoardById(params.id);

    return (
        <main>
            <h1>Board {board.title}</h1>
        </main>
    );
}