type LoggerData<T> = {
  msg?: string;
  context?: string;
  error?: Error;
  payload?: T;
}

export const logger = {
  info: <T>(data: LoggerData<T>) => console.info(
    `[INFO] [${data.context}]`, data.msg, data.payload,
  ),
  error: <T>(data: LoggerData<T>) => console.info(
    `[ERROR]  [${data.context}]`, data.error,
  ),
};