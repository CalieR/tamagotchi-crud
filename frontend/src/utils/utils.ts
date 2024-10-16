export const formatDate = (value: string) => {
    const date = new Date(value);
    const monthDayYear = date.toLocaleDateString('en-GB', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return monthDayYear;
  };