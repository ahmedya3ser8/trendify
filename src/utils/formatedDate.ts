const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formateDate = (dateNow: Date) => {
  const month = months[dateNow.getMonth()];
  const day = dateNow.getDate();
  const year = dateNow.getFullYear();
  return `${month} ${day} ${year}`
}

export default formateDate;
