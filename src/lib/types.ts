// Board
export type Board = {
    _id: string;
    title: string;
    items: [];
};
export function isBoard(object: any): object is Board {
    return '_id' in object && 'title' in object && 'items' in object;
};

// BoardError
export type BoardError = {
    error: string;
};
export function isBoardError(object: any): object is BoardError {
    return 'error' in object;
};