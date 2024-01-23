import styles from "./page.module.scss";

export default function BoardPage({ params }: { params: { id: string } }) {
    return (
        <main>
            <h1>Board {params.id}</h1>
        </main>
    );
}