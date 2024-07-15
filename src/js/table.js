export default class Table {
  constructor(element) {
    this._element = element;
  }
  fillTable(arr) {
    for (let str of arr) {
      let el = document.createElement("tr");
      el.classList.add("row");
      for (let key of Object.keys(str)) {
        el.dataset[key] = str[key];
        let child = document.createElement("td");
        child.textContent = str[key];
        el.appendChild(child);
      }
      this._element.appendChild(el);
    }
  }
  arrangeTable(arr, key, up) {
    let length = arr.length;
    let newArr = [];
    if (up > 0) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
          let min = arrayMin(arr, key);
          for (let row of arr) {
            if (row === min) {
              newArr.push(row);
              arr = arr.filter((r) => {
                return r !== row;
              });
            }
          }
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
          let max = arrayMax(arr, key);
          for (let row of arr) {
            if (row === max) {
              newArr.push(row);
              arr = arr.filter((r) => {
                return r !== row;
              });
            }
          }
        }
      }
    }
    this._element.innerHTML = "";
    this.fillTable(newArr)
  }
}

export function arrayMin(arr, key) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(minValue[key])) {
      if (Number(arr[i][key]) < Number(minValue[key])) {
        minValue = arr[i];
      }
    } else {
      if (arr[i][key] < minValue[key]) {
        minValue = arr[i];
      }
    }
  }
  return minValue;
}

export function arrayMax(arr, key) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(maxValue[key])) {
      if (Number(arr[i][key]) > Number(maxValue[key])) {
        maxValue = arr[i];
      }
    } else {
      if (arr[i][key] > maxValue[key]) {
        maxValue = arr[i];
      }
    }
  }
  return maxValue;
}
