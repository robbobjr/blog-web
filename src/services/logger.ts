type LoggerData<T> = {
  msg?: string;
  context?: string;
  error?: Error;
  payload?: T;
}

const date = new Date();
const time = date.toLocaleTimeString();
const fDate = date.toLocaleDateString();

export const logger = {
  info: <T>(data: LoggerData<T>) => console.info(
    `[${fDate} ${time}] [INFO] [${data.context || "GLOBAL"}]`, data.msg, data.payload,
  ),
  error: <T>(data: LoggerData<T>) => console.info(
    `[${fDate} ${time}] [ERROR]  [${data.context || "GLOBAL"}]`, data.error,
  ),
};