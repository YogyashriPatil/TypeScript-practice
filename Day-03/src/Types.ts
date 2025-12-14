type Book = {
    name: string
}

let Bookstring = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(Bookstring) as Book
console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement


let value:any
value="chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newvalue:unknown
newvalue="chai"
newvalue = [1,2,3]
newvalue = 2.5

if(typeof newvalue === "string")
{
    newvalue.toUpperCase()
}


const data:unknown = "chai aur code"
// give as forcefully 
// assume that it is the string
const str:string = data as string