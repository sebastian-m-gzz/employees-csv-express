const csv = require('./csv');

module.exports = {
  getFullData,
  getData,
  isOfType
}

/*
  Gets the entry with the given index.
  @param {int} index - The index of the entry to retrieve.
  @return {string} - The corresponding data, else undefined. 
*/
async function getFullData(index) {
  let json = await csv.getJson();
  let entry = json.filter(e => e.id == index);
  return entry[0];
}

/*
  Gets the column from the entry with the given index.
  @param {int} index - The index of the entry to retrieve.
  @param {string} column - The column to retrieve.
  @return {string} - The corresponding data, else undefined. 
*/
async function getData(index, column) {
  let json = await csv.getJsonById(index);
  return json[column];
}

/*
  Determines if a variable is of certain type.
  @param {any} value - The variable to check the type.
  @param {stirng} type - The type to check if matches.
*/
async function isOfType(value, type) {
  let fullType = Object.prototype.toString.call(value);
  let trueType = fullType.substring(
    fullType.indexOf(" ") + 1, 
    fullType.indexOf("]"));
  return trueType === type;
}
