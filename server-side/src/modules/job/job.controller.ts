import { Controller } from '@nestjs/common';
import { JobService } from "./job.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('职位招聘')
@ApiBearerAuth()
@Controller('job')
export class JobController {
    constructor(private jobService: JobService) {}


}
