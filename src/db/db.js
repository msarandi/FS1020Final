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
   let dbInfo = JSON.parse(fileContents);
  return dbInfo;
}




 /**
 * Write the contents of db.json, replacing the entire file
 */
async function write (dbInfo) {
  let json = JSON.stringify (dbInfo, null, 2);
  await writeFile (dbPath, json);
}

 /*/
 * Add an item to the DB using a combination of `read` and `write`
 */


 async function addUser(newUser) {
   let dbUser = await read ();


   dbUser.push(newUser);
  await write(dbUser);
 }


module.exports = {
  addUser: addUser,
  read: read,
};


