const datePicker = document.getElementById('datepicker');
const today = new Date();

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

new Pikaday({
  field: datePicker,
  format: 'D/MM/YYYY',
  minDate: today,
  i18n: {
    previousMonth: 'Bulan Sebelumnya',
    nextMonth: 'Bulan Selanjutnya',
    months: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    weekdays: ['Minggu', 'Senin', 'Selesa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    weekdaysShort: ['Mig', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  },
  toString(date, format) {
    return formatDate(date);
  },
});
