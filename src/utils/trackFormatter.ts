import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getTrackDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const format = (num: number) => num.toString().padStart(2, '0');

  return `${minutes}:${format(seconds)}`;
};

export const getAddedDate = (dateString: string) => {
  return formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
    locale: ru,
  });
};
