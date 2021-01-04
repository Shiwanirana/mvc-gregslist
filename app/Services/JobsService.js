import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"

class JobsService {
  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
  createJob(newJob) {
    let job = new Job(newJob)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }

}
// Singleton Pattern
export const jobsService = new JobsService()