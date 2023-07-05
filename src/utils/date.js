class Dates {
  constructor() {
    this._date = new Date();
    this._month = [
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
    ];
  }

  now() {
    const date = this._date.toLocaleDateString().split('/');
    return `${date[1].toString().padStart(2, '0')}/${date[0].padStart(
      2,
      '0'
    )}/${date[2]}`;
  }
}

module.exports = Dates;
