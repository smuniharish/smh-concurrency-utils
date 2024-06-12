import * as os from 'os';
import { getDynamicConcurrencyI } from '../interfaces';
const getDynamicConcurrency = (options: getDynamicConcurrencyI) => {
  options.memoryLimitThreshold = options.memoryLimitThreshold || 0.8;
  const cpuCount = os.cpus().length;
  const loadAverage = os.loadavg()[0];
  const memoryUsage = os.totalmem() - os.freemem();
  const memoryLimit = os.totalmem() * options.memoryLimitThreshold;

  // Example logic: Adjust concurrency based on load average and memory usage
  if (loadAverage > cpuCount * options.memoryLimitThreshold || memoryUsage > memoryLimit) {
    const result = Math.max(1, Math.floor(cpuCount / 2));
    return result === 0 ? 1 : result; // Reduce concurrency
  } else {
    const result = Math.min(cpuCount * 2, Math.floor(memoryLimit / (512 * 1024 * 1024))); // Increase concurrency
    return result === 0 ? 1 : result; // Reduce concurrency
  }
};
export default getDynamicConcurrency;
