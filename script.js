const bill = document.getElementById("bill");
const billError = document.getElementById("billError");

const people = document.getElementById("noPeople");
const peopleError = document.getElementById("noPeopleError");

const customTip = document.getElementById("custom");
const fiveTip = document.getElementById("5%");
const tenTip = document.getElementById("10%");
const fifteenTip = document.getElementById("15%");
const twenfiveTip = document.getElementById("25%");
const fiftyTip = document.getElementById("50%");

const totalResults = document.getElementById("totalResults");

/* verification function for inputs */

function itemVerify(v, c, e) {
  if (v == 0 || v == null) {
    c.classList.add("incorrect");
    e.innerHTML = "Can't be zero";
  } else {
    c.classList.remove("incorrect");
    e.innerHTML = "";
  }
}

bill.addEventListener("change", function () {
  const billInput = bill.value;
  itemVerify(billInput, bill, billError);
});

people.addEventListener("change", function () {
  const peopleInput = people.value;
  itemVerify(peopleInput, people, peopleError);
});

/* Btn States */

function activeButton(selectedBtn) {
  selectedBtn.style.backgroundColor = "#26c0ab";
  selectedBtn.style.color = "#00494d";
  selectedBtn.style.border = "none";
}

function buttonReset(otherButton) {
  otherButton.style.backgroundColor = "#00494d";
  otherButton.style.color = "#f4fafa";
  otherButton.style.border = "none";
}

/* btn selection */

function buttonSelection(e) {
  let buttonId = e.target.id;

  switch (buttonId) {
    case "5%": {
      let result = 0.05;
      activeButton(fiveTip);
      buttonReset(tenTip);
      buttonReset(fifteenTip);
      buttonReset(twenfiveTip);
      buttonReset(fiftyTip);
      customTip.style.border = "none";
      /* console.log(result); */
      return result;
    }
    case "10%": {
      let result = 0.1;
      activeButton(tenTip);
      buttonReset(fiveTip);
      buttonReset(fifteenTip);
      buttonReset(twenfiveTip);
      buttonReset(fiftyTip);
      customTip.style.border = "none";
      console.log(result);
      return result;
    }
    case "15%": {
      let result = 0.15;
      activeButton(fifteenTip);
      buttonReset(fiveTip);
      buttonReset(tenTip);
      buttonReset(twenfiveTip);
      buttonReset(fiftyTip);
      customTip.style.border = "none";
      console.log(result);
      return result;
    }
    case "25%": {
      let result = 0.25;
      activeButton(twenfiveTip);
      buttonReset(fiveTip);
      buttonReset(tenTip);
      buttonReset(fifteenTip);
      buttonReset(fiftyTip);
      customTip.style.border = "none";
      console.log(result);
      return result;
    }
    case "50%": {
      let result = 0.5;
      activeButton(fiftyTip);
      buttonReset(fiveTip);
      buttonReset(tenTip);
      buttonReset(fifteenTip);
      buttonReset(twenfiveTip);
      customTip.style.border = "none";
      console.log(result);
      return result;
    }
    case "custom": {
      let result = customTip.value * 0.01;
      customTip.style.border = "2px solid #26c0ab";
      buttonReset(fiftyTip);
      buttonReset(fiveTip);
      buttonReset(tenTip);
      buttonReset(fifteenTip);
      buttonReset(twenfiveTip);
      console.log(result);
      return result;
    }
  }
}

fiveTip.addEventListener("click", buttonSelection);
tenTip.addEventListener("click", buttonSelection);
fifteenTip.addEventListener("click", buttonSelection);
twenfiveTip.addEventListener("click", buttonSelection);
fiftyTip.addEventListener("click", buttonSelection);
customTip.addEventListener("click", buttonSelection);

people.addEventListener("change", resultsModification);

function resultsModification() {
  let peopleValue = people.value;
  let billValue = bill.value;
  let totalUnrounded = billValue / peopleValue;
  total = Math.round(totalUnrounded * 100) / 100;
  console.log(`$ ${total}`);
  totalResults.innerHTML = `$ ${total}`;
}
