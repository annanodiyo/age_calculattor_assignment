

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

      let error = false;
      if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
        setError(dayInput, "This field is required");
        setError(monthInput, "This field is required");
        setError(yearInput, "This field is required");
      error = true;
      }else{
        clearError(dayInput);
        clearError(monthInput);
        clearError(yearInput);
      }

      if (birthDay < 1 || birthDay > 31) {
        setError(dayInput, "Must be a valid day");
        error = true;
      } else {
        clearError(dayInput);
      }
      if (birthDay > 29 && birthMonth == 2) {
        setError(dayInput, "Must be a valid day");
        error = true;
      } else {
        clearError(dayInput);
      }


      if (birthMonth < 1 || birthMonth > 12) {
        setError(monthInput, "Must be a valid month");
        error = true;
      } else {
        clearError(monthInput);
      }

      if (birthYear > new Date().getFullYear()) {
        setError(yearInput, "Must be a valid year");
        error = true;
      } else {
        clearError(yearInput);
      }

      if (error) {
        YY.textContent = "--";
        MM.textContent = "--";
        DD.textContent = "--";
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
        const lastDayOfMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    days += lastDayOfMonth;
        // days += 30;
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      YY.textContent = years ;
      MM.textContent = months ;
      DD.textContent = days ;
    });

    function setError(input, message) {
      const small = input.nextElementSibling;
      small.textContent = message;
      input.classList.add("error");
    }

    function clearError(input) {
      const small = input.nextElementSibling;
      small.textContent = "";
      input.classList.remove("error");
    }
  // });
