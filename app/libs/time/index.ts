import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

/**
 * UTC形式をYYYY-MM-DDに変換
 * @param time UTC系資金時間
 * @returns YYYY-MM-DDの文字列
 */
export const getDate = (time: string | undefined) =>
  dayjs.utc(time).tz().format("YYYY-MM-DD");
