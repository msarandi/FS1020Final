'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);



let dbPath = path.resolve('src/db/db.json');
let contactPath = path.resolve('src/db/contacts.json');


/**
 * Read the contents of db.json
 */

 async function read(path) {
   let fileContents = await readFile(path);
   let dbInfo = JSON.parse(fileContents);
  return dbInfo;
}

 /**
 * Write the contents of db.json, replacing the entire file
 */
async function write (dbInfo, path) {
  let json = JSON.stringify (dbInfo, null, 2);
  await writeFile (path, json);
}

 /*/
 * Add an item to the DB using a combination of `read` and `write`
 */


 async function addUser(newUser) {
   let dbUser = await read(dbPath);


   dbUser.push(newUser);
  await write(dbUser, dbPath);
 }

 async function addContact(contact) {
   let contacts = await read(contactPath);
   contacts.push(contact);
   await write(contacts, contactPath)
 }

module.exports = {
  addUser: addUser,
  read: read,
  addContact: addContact
};


