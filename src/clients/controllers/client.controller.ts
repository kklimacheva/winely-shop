import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientDto } from '../client.dto';
import { ClientModel } from '../client.model';

@ApiTags('clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({
    summary: 'Get all clients',
  })
  @ApiResponse({
    status: 200,
    description: 'Clients list successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get()
  async getAllClients(): Promise<ClientModel[]> {
    return this.clientService.getAllClients();
  }

  @ApiOperation({
    summary: 'Get client by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Client successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get(':id')
  async getClientById(@Param('id') id: number): Promise<ClientModel> {
    return this.clientService.findClient(id);
  }

  @ApiOperation({
    summary: 'Create new client',
  })
  @ApiResponse({
    status: 201,
    description: 'Client successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Post()
  @ApiBody({ type: ClientDto })
  async createClient(@Body() clientData: ClientDto): Promise<ClientModel> {
    return this.clientService.createClient(clientData);
  }

  @ApiOperation({
    summary: "Update client's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Client's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: ClientDto })
  async updateClient(
    @Param('id') id: number,
    @Body() data: ClientDto,
  ): Promise<ClientModel> {
    return this.clientService.updateClient(id, data);
  }

  @ApiOperation({
    summary: 'Delete client by his id',
  })
  @ApiResponse({
    status: 201,
    description: 'Client successfully deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Delete(':id')
  async deleteClient(@Param('id') id: number): Promise<ClientModel> {
    return this.clientService.deleteClient(id);
  }
}
