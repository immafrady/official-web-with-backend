import { Module } from '@nestjs/common';
import { jobProviders } from "./job.provider";

@Module({
    providers: [
        ...jobProviders
    ]
})
export class JobModule {}
