/**
 * Friend class, represents a friendship
 * has two User objects
 */
export class Friend {
    constructor(user, friend) {
        this.user = user;
        this.friend = friend;
    }
    getUser() {
        return this.user;
    }
    getFriend() {
        return this.friend;
    }
}