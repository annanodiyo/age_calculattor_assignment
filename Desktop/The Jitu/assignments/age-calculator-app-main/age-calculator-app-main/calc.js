

    const form = document.querySelector("form");
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const YY = document.getElementById("YY");
    const MM = document.getElementById("MM");
    const DD = document.getElementById("DD");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const birthDay = parseInt(dayInput.value);
      const birthMonth = parseInt(monthInput.value);
      const birthYear = parseInt(yearInput.value);

      if (
        isNaN(birthDay) ||
        isNaN(birthMonth) ||
        isNaN(birthYear) ||
        birthDay < 1 ||
        birthDay > 31 ||
        birthMonth < 1 ||
        birthMonth > 12 ||
        birthYear < 1900 ||
        birthYear > new Date().getFullYear()
      ) {
        alert("Please enter a valid date of birth.");
        return;
      }

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      let years = currentYear - birthYear;
      let months = currentMonth - birthMonth;
      let days = currentDay - birthDay;

      if (days < 0) {
        months--;
        days += 30;
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      YY.textContent = years ;
      MM.textContent = months ;
      DD.textContent = days ;
    });
