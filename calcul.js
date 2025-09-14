const display = document.getElementById("display");
const append=(value) => display.value += value;
const clearDisplay=() => display.value = '';
const deleteLast=() => display.value = display.value.slice(0, -1);
const equal=() => display.value = eval(display.value);
const sin = () => display.value = Math.sin(display.value);
const cos = () => display.value = Math.cos(display.value);
const tan = () => display.value = Math.tan(display.value);
const squr = () => display.value = Math.sqrt(display.value);