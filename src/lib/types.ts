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
export type DatabaseError = {
    error: string;
};
export function isDatabaseError(object: any): object is DatabaseError {
    return 'error' in object;
};

// User
export type User = {
    _id: string;
    boardIds: [];
}
export function isUser(object: any): object is User {
    return '_id' in object && 'boardIds' in object;
};