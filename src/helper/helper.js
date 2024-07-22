

export function formatToNaira(amount) {
    // Create a new instance of Intl.NumberFormat for Nigerian currency
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    });
  
    // Format the given amount
    return formatter.format(amount);
  }

  export  function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(d.getDate()).padStart(2, '0');
  
    return `${day}-${month}-${year}`;
  }