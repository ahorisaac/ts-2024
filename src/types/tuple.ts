// A tuple is an array with a predefined length and predefined types in each index position in the array.

let array = ["Soovica", 35, true];
array = [24, true, "Viter", "Precious", "Kingdom"];

/**
 * This is where a Tuple differentiate itself from an array.
 * In a tuple, the type of each element, the length o the array,
 * and the order in which the elements are ordered in the array
 * are essential.
 */

let tuple: [number, string, boolean] = [12, "Kendi", true];

// we can add more elements to an array, but we can't do same to a tuple.
// tuple = [24, true, "Viter", "Precious", "Kingdom"];

// the order of the elements in a tuple is important.
// tuple = ["Presh", 35, true];

tuple.push("Lian");
console.log("tuple: ", tuple);

let tuple2: readonly [number, string, boolean] = [23, "Shima", false];
// tuple2.push("Steve");

let tuple3: [name: string, age: number] = ["Tony", 35];

function printMessage(name: string, age: number) {
    console.log(`Hello, ${name}, you are ${age} years old.`)
}

printMessage("Tony", 35);
printMessage(tuple3[0], tuple3[1]);

const [myNameTest, myAgeTest] = tuple3;
printMessage(myNameTest, myAgeTest);
