import { DateTime } from 'luxon';

export const date = (dateString = null, format = 'DD') => {
    if (dateString == null) {
        return '-';
    }

    let d = DateTime.fromISO(dateString)
        .setZone('Africa/Lagos');

    return d.toFormat(format);
}
