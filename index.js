let counter = 0;
function increment() {
  counter++;
  document.getElementById('count-el').innerHTML = counter;
}
function save() {
  let saved = document.createElement('span');
  let separator = ' - ';
  saved.innerHTML += `${counter}  ${separator}`;
  document.getElementById('save-el').appendChild(saved);
  counter = 0;
  counter.innerHTML= 0;
}
function total() {
  let total = 0;
  let saved = document.getElementById('save-el').children;
  for (let i = 0; i < saved.length; i++) {
    total += parseInt(saved[i].innerHTML, 10);
  }
  document.getElementById('total-btn').innerHTML = total;
}

