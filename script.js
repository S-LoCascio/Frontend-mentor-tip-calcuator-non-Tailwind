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
      fiveTip.id = "active5";
      activeButton(fiveTip);

      let remainder = [tenTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      tenTip.id = "10%";
      fifteenTip.id = "15%";
      twenfiveTip.id = "25%";
      fiftyTip.id = "50%";
      customTip.id = "custom";

      break;
    }

    case "10%": {
      tenTip.id = "active10";
      activeButton(tenTip);

      let remainder = [fiveTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      fiveTip.id = "5%";
      fifteenTip.id = "15%";
      twenfiveTip.id = "25%";
      fiftyTip.id = "50%";
      customTip.id = "custom";

      break;
    }

    case "15%": {
      fifteenTip.id = "active15";
      activeButton(fifteenTip);

      let remainder = [fiveTip, tenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      tenTip.id = "10%";
      fiveTip.id = "5%";
      twenfiveTip.id = "25%";
      fiftyTip.id = "50%";
      customTip.id = "custom";

      break;
    }

    case "25%": {
      twenfiveTip.id = "active25";
      activeButton(twenfiveTip);

      let remainder = [fiveTip, tenTip, fifteenTip, fiftyTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      tenTip.id = "10%";
      fifteenTip.id = "15%";
      fiveTip.id = "5%";
      fiftyTip.id = "50%";
      customTip.id = "custom";

      break;
    }

    case "50%": {
      fiftyTip.id = "active50";
      activeButton(fiftyTip);

      let remainder = [fiveTip, tenTip, twenfiveTip, fifteenTip];
      remainder.forEach(buttonReset);
      customTip.style.border = "none";

      tenTip.id = "10%";
      fifteenTip.id = "15%";
      twenfiveTip.id = "25%";
      fiveTip.id = "5%";
      customTip.id = "custom";

      break;
    }

    case "custom": {
      customTip.id = "activeCust";
      customTip.style.border = "2px solid #26c0ab";

      let remainder = [fiveTip, tenTip, fifteenTip, twenfiveTip, fiftyTip];
      remainder.forEach(buttonReset);

      fiveTip.id = "5%";
      tenTip.id = "10%";
      fifteenTip.id = "15%";
      twenfiveTip.id = "25%";
      fiftyTip.id = "50%";
      customTip.id = "custom";

      break;
    }
  }
}

tipButtonCollection.forEach((item) =>
  item.addEventListener("click", buttonSelection)
);

/* Mathing the Math on the side portion */

people.addEventListener("change", resultsModification);

function resultsModification() {
  let peopleValue = people.value;
  let billValue = bill.value;
  let totalUnrounded = billValue / peopleValue;

  total = Math.round(totalUnrounded * 100) / 100;
  totalResults.innerHTML = `$ ${total}`;
}
