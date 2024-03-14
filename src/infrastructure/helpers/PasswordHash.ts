import { randomBytes, pbkdf2Sync } from "crypto";

export function passwordHash(password) {
    // Creating a unique salt for a particular user 
    let salt = randomBytes(16).toString('hex');
    // Hashing user's salt and password with 1000 iterations, 
    let hash = pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
    return hash;
}