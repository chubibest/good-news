function formatDate(inputDate) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const suffix = getNumberSuffix(day);
  
    return `${month} ${day}${suffix}, ${year}`;
  }
  
  function getNumberSuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
  
    const lastDigit = day % 10;
  
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  // Example usage:
  const dateString = '2023-11-22T18:33:45Z';
  const formattedDate = formatDate(dateString);
  console.log(formattedDate);
  
export default formatDate