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
const tipButtonCollection = document.querySelectorAll(".tip-btn");
const results = document.getElementById("results");

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
  selectedBtn.classList.remove("inactive-btn");
  selectedBtn.classList.add("active-btn");
}

function buttonReset(otherButton) {
  otherButton.classList.add("inactive-btn");
  otherButton.classList.remove("active-btn");
}

/* btn selection */

function buttonSelection(e) {
  let buttonId = e.target.id;

  switch (buttonId) {
    case "5%": {
      results.id = `active5`;
      activeButton(fiveTip);

      let remainder = [tenTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      break;
    }

    case "10%": {
      results.id = "active10";
      activeButton(tenTip);

      let remainder = [fiveTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      break;
    }

    case "15%": {
      results.id = "active15";
      activeButton(fifteenTip);

      let remainder = [fiveTip, tenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      break;
    }

    case "25%": {
      results.id = "active25";
      activeButton(twenfiveTip);

      let remainder = [fiveTip, tenTip, fifteenTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      break;
    }

    case "50%": {
      results.id = "active50";
      activeButton(fiftyTip);

      let remainder = [fiveTip, tenTip, twenfiveTip, fifteenTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      break;
    }

    case "custom": {
      results.id = "activeCust";
      customTip.style.border = "2px solid #26c0ab";

      let remainder = [fiveTip, tenTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);

      break;
    }
  }
}

tipButtonCollection.forEach((item) =>
  item.addEventListener("click", buttonSelection)
);

/* Mathing the Math on the side portion */

const tipAmount = document.getElementById(`tipResults`);
const totalAmount = document.getElementById(`totalResults`);

people.addEventListener("blur", getTheValues);

function getTheValues() {
  let billValue = bill.value;
  let peopleValue = people.value;
  console.log(`Your bill Value is $ ${billValue}`);
  console.log(`Your people Value is ${peopleValue}`);

  getTheResultsId();
}

function getTheResultsId() {
  resultsID = document.querySelector('[id^="active"]').id;

  switch (resultsID) {
    case "active5": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let t = 0.05;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }

    case "active10": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let t = 0.1;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }

    case "active15": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let t = 0.15;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }

    case "active25": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let t = 0.25;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }

    case "active50": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let t = 0.5;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }

    case "activeCust": {
      let billValue = bill.value;
      let peopleValue = people.value;
      let tipAmount = customTip.value;
      let t = tipAmount * 0.01;
      TipNumber = TipAmountCalculator(billValue, peopleValue, t);
      TotalNumber = totalAmountCalculator(billValue, peopleValue, t);
      break;
    }
  }
}

function TipAmountCalculator(B, P, T) {
  result = (B / P) * T;
  moneyResult = Math.round(result * 100) / 100;
  tipAmount.innerHTML = `$${moneyResult}`;
}

function totalAmountCalculator(B, P, T) {
  tipResult = (B / P) * T;
  total = B / P + tipResult;
  moneyResult = Math.round(total * 100) / 100;
  totalAmount.innerHTML = `$${moneyResult}`;
}
