export const getYearDiffFromDate = (date: string) => {
    const dateTime = new Date(date);
    return Math.abs(
      new Date(Date.now() - dateTime.getTime()).getUTCFullYear() - 1970
    );
  };