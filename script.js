class Zamestnanci{
    constructor(name, text, price, mark, category){
        this.name = name;
        this.text = text;
        this.price = price;
        this.mark = mark;
        this.category = category;
    }
}

let zamestanci = [];

function reqListener() {
    console.log(this.responseText);
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  req.send();

  function save(i) {
      localStorage.setItem('data', JSON.stringify(zamestnanci));
  }

  function load(i) {
      zamestanci = [];
      zamestanci = JSON.parse(localStorage.getItem('data'))
  }

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
  } else {
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}