"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByArrowFunction = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
const getUserByArrowFunction = (id, callback) => {
    const user = users.find((user) => user.id === id);
    (user)
        ? callback(undefined, user)
        : callback(`User not found with id ${id}`);
};
exports.getUserByArrowFunction = getUserByArrowFunction;
