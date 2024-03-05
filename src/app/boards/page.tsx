import styles from "./page.module.scss";

export default async function BoardPage({ params }: Readonly<{ params: { id: string } }>) {

    return (
        <main>
            <h1>Boards</h1>
        </main>
    );
}