import moment from "moment";

const isBeforeNow = (someTime: string) => {
  console.log(moment().toString());
  return moment(someTime).isBefore(moment());
};

export { isBeforeNow };
