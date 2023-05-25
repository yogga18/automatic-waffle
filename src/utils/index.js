import moment from 'moment';

export const genderCheck = (gender) => {
  if (gender === 'L') {
    return 'Laki-laki';
  } else {
    return 'Perempuan';
  }
};

export const isActiveCheck = (active) => {
  if (active === 0) {
    return 'Tidak Aktif';
  } else if (active === 1) {
    return 'Aktif';
  } else {
    return 'Ijin Belajar';
  }
};

export const convertDate = (val, format = 'YYYY-MM-DD') => {
  return moment(val).locale('id').format(format);
};
