import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClientDto } from '../client.dto';
import { PrismaService } from '../../prisma.service';
import { ClientModel } from '../client.model';

@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService) {}

  async findClient(id: number): Promise<ClientModel | null> {
    const client = await this.prisma.client.findUnique({
      where: { id: Number(id) },
    });
    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }
    return ClientModel.fromClient(client);
  }

  async getAllClients(): Promise<ClientModel[]> {
    const clients = await this.prisma.client.findMany();
    return clients.map((client) => ClientModel.fromClient(client));
  }

  async createClient(data: ClientDto): Promise<ClientModel> {
    const client = new ClientModel();
    client.email = data.email;
    client.name = data.name;
    client.isAdmin = data.isAdmin;

    const clientCreateInput: Prisma.ClientCreateInput =
      ClientModel.toCreateInput(client);

    await this.prisma.client.create({ data: clientCreateInput });

    return client;
  }

  async updateClient(id: number, data: ClientDto): Promise<ClientModel> {
    const updatedClient = await this.prisma.client.update({
      where: { id: Number(id) },
      data: data,
    });
    return ClientModel.fromClient(updatedClient);
  }

  async deleteClient(id: number): Promise<ClientModel> {
    const deletedClient = await this.prisma.client.delete({
      where: { id: Number(id) },
    });
    return ClientModel.fromClient(deletedClient);
  }
}
