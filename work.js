
const DOB = document.getElementById("dob");
const CalBtn = document.getElementById("calBtn");
const YearBlock = document.getElementById("work1");
const MonthBlock = document.getElementById("work2");
const DayBlock = document.getElementById("work3");
const Days = document.getElementById("days");


CalBtn.addEventListener('click',function(){
    if (!DOB.value) {
        alert("Please fill the DOB");
        return; // Exit the function
    }
    //user data
    else{
    const data = DOB.value
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    //calculate age
    let calculatedYear = currentYear - year;
    let calculatedMonth = currentMonth - month;
    let calculatedDay = currentDay - day;

    // Adjust for negative days
    if (calculatedDay < 0) {
        // Get the number of days in the previous month
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
        calculatedDay += daysInPreviousMonth;
        calculatedMonth -= 1;
    }

    // Adjust for negative months
    if (calculatedMonth < 0) {
        calculatedMonth += 12;
        calculatedYear -= 1;
    }

    // console.log(calculatedYear)
    // console.log(calculatedMonth)
    // console.log(calculatedDay)

    // Populate the inputs
    YearBlock.value = calculatedYear;  // Years
    MonthBlock.value = calculatedMonth; // Months
    DayBlock.value = calculatedDay;   // Days


    let totalDays = (calculatedYear * 365) + (calculatedMonth * 30) + calculatedDay;


    const leapYears = Math.floor(calculatedYear / 4); // Approximation
    totalDays += leapYears;

    console.log(totalDays)
    Days.classList.remove('hidden');
        // resultContainer.classList.remove('hidden');
    Days.textContent = `Oh! congrats you lived ${totalDays} days`;
}
});

