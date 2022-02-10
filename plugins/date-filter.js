import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const month = date.getMonth();
  const day = date.getDate();
  const dayName = date.toLocaleDateString('en', { weekday: 'long' })
  const formattedDate = `${dayName}, ${day} ${months[month]}`;
  return formattedDate;
}

Vue.filter('date', dateFilter)