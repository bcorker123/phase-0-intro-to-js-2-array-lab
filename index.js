// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(name) {cats.push(name)};
function destructivelyPrependCat(name) {cats.unshift(name)};
function destructivelyRemoveLastCat(name){cats.pop()};
function destructivelyRemoveFirstCat(name){cats.shift()};
function appendCat(name){
    let copyOfCats=[...cats, name];
    return copyOfCats;
};
function prependCat(name){
    let copyOfCats=[name, ...cats];
    return copyOfCats;
};
function removeLastCat(){
    let copyOfCats = cats.slice(0,2);
    return copyOfCats;
}
function removeFirstCat(){
    let copyOfCats = cats.slice(1);
    return copyOfCats;
}