'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let dbPath = path.resolve('src/db/db.json');

/**
 * Read the contents of db.json
 */

async function read() {
  let fileContents = await readFile(dbPath);
  return JSON.parse(json);
}


 /**
 * Write the contents of db.json, replacing the entire file
 */
async function write (dbUser) {
  let json = JSON.stringify (dbUser);
  await writeFile (dbPath, json);
}

 /*/
 * Add an item to the DB using a combination of `read` and `write`
 */


 async function addUser(user) {
   let dbUser = await read ();
   dbUser.push(user);
   await write (dbUser);
 }

 // Export the read and addItem functions, but not `write` as that's internal
module.exports = {
  addUser: addUser,
};
