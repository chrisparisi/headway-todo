import { formatDistance, subDays } from 'date-fns'

function dateTest() {

const dateToday = document.querySelector('.todo-due-date');
const theDate = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

console.log(theDate);

dateToday.textContent = theDate;

return dateToday
}

dateTest();

console.log("I am struggling");
