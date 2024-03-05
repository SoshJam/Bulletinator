import styles from "./page.module.scss";
import { Metadata } from "next";
import { BoardList } from "@/components/boardlist";

export const metadata: Metadata = {
    title: "Boards | Bulletinator",
    description: "Bulletinator is a bulletin board app for planning your next project.",
};

export default function BoardListPage({ params }: Readonly<{ params: { id: string } }>) {

    return (
        <main>
            <h1>Boards</h1>
            <BoardList params={params}/>
        </main>
    );
}