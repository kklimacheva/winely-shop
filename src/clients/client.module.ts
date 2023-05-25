import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ClientController],
  providers: [PrismaService, ClientService],
})
export class ClientModule {}
