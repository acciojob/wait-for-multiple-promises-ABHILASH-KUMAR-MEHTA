//your JS code here. If required.
const outputBody = document.getElementById("output");

const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.innerText = "Loading...";
loadingRow.appendChild(loadingCell);
outputBody.appendChild(loadingRow);

function createRandomPromise(index) {
  const delay = Math.random() * 2 + 1; 
  const startTime = performance.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = performance.now();
      const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
      resolve({ name: `Promise ${index + 1}`, time: timeTaken });
    }, delay * 1000);
  });
}

const promises = [0, 1, 2].map((i) => createRandomPromise(i));
const startTime = performance.now();

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  outputBody.innerHTML = "";

  // Add a row for each promise
  results.forEach((result) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = result.name;

    const timeCell = document.createElement("td");
    timeCell.innerText = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);

    outputBody.appendChild(row);
  });

  const totalRow = document.createElement("tr");

  const totalNameCell = document.createElement("td");
  totalNameCell.innerText = "Total";

  const totalTimeCell = document.createElement("td");
  totalTimeCell.innerText = totalTime.toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);

  outputBody.appendChild(totalRow);
});
