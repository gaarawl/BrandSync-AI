import "dotenv/config";
import { Queue, Worker, QueueScheduler } from "bullmq";
import IORedis from "ioredis";
const connection = new IORedis(process.env.REDIS_URL!);
export const outreachQueue = new Queue("outreach", { connection });
new QueueScheduler("outreach", { connection });
new Worker("outreach", async job => {
  // TODO: render template + send email/DM
  console.log("Processing outreach job", job.id, job.data);
}, { connection });
console.log("Worker ready");
