// const arr = new Array(5)
// for (let index = 0; index < 6; index++) {
//     arr[index] = index

// }
// arr.forEach(element => {
//     console.log(element);
// });
// console.log('len: ' + arr.length);

// class DynamicArray {
//     constructor(length = Number) {
//         let array = new Array(length)
//         for (let index = 0; index < length; index++) {
//             array[index] = null;
//         }
//         console.log(array);
//     }
// }
class StaticArray {
  constructor(length = Number) {
    this.length = length;
    this.array = new Array(length);
    this.size = 0;
    console.log(this.array);
  }

  push(data) {
    if (this.size < this.length) {
      this.array[this.size] = data;
      this.size++;
    } else {
      console.error("Full!");
    }
  }

  pop() {
    this.size--;
    this.array[this.size] = null;
  }

  insert(index, data) {
    if (index < this.length) {
      if (this.array[index] == null) {
        this.size++;
      }
      this.array[index] = data;
    } else {
      console.error("Index out of range!");
    }
  }

  remove(index) {
    if (index < this.length) {
      if (this.array[index] != null && index == this.size - 1) {
        this.size--;
      }
      this.array[index] = null;
    }
  }
}
let sa = new StaticArray(5);
sa.push(4);
sa.push(4);
sa.push(4);
console.log(sa.array);
// da.pop();
sa.insert(3, 12);
console.log(sa.array);
console.log(sa.size);
sa.remove(2);
sa.push(7);
sa.push(7);
sa.insert(2,8)
console.log(sa.array);
console.log(sa.size);
