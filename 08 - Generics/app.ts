// Simple Generic
console.log('SIMPLE GENERICS');
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better Generic
console.log("BETTER GENERICS");
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in Generics
console.log("BUILT-IN GENERICS");
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
console.log('GENERIC ARRAYS');
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);
printAll<number>([1, 2]);

// Generic Types
console.log('GENERIC TYPES');
const echo2: <T>(data: T) => T = betterEcho;
// here '<T>(data: T) => T' is called type Assignment(generic type)
console.log(echo2<string>("Something"));

// Generic Class
console.log('GENERIC CLASS AND CONSTRAINTS');

class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

/**
 * Solution:
 * Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
 * Let's keep it simple and only add the following methods to the Map:
 */

console.log("SOLUTION");
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();