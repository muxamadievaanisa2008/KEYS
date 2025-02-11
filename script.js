// #1
let pupil = {
    name: "Yasmina",
    surname: "Maxmudova",
    age: 18,
    school: 1,
    hobbiy: "Sleeping",
    parents: {
        mom: "Ruxsora",
        dad: "Ravshan"
    }, 
    brother: "Azamat",
    sister: "Ruxshona",
    friends: {
        girlfriend: "Moxi",
        boyfriend: "Shaxboz"
    }
}
console.log(pupil);


let MobilePhone = {
    producer: "Apple",
    model: "Iphone",
    color: "Grey",
    memory: 64,
    battery: 100,   
    price: 199999,
    payment: "cash",
    year: 2017,
}
console.log(MobilePhone);


// #2
let object = Object.assign({}, {pupil, MobilePhone})
console.log(object);

// #3
let keys = Object.keys(pupil)
console.log(keys);

// #4
let values = Object.values(pupil)
console.log(values);


// #5
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}

Object.values(object).forEach(value => {
    if (typeof value === "string") {
        types.string.push(value);
    } else if (typeof value === "number") {
        types.number.push(value);
    } else if (typeof value === "object") {
        types.object.push(value);
    } else if (typeof value === "boolean") {
        types.boolean.push(value);
    }
})
console.log(types);


  
  
