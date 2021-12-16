import {
  Post,
  Get,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Put,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import { CreateContactDTO } from './dto/contact.dto';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}
  // Getting all contacts
  @Get('/')
  async getContacts(@Res() res) {
    const contacts = await this.contactService.getContacts();
    return res.status(HttpStatus.OK).json(contacts);
  }
  // Add a contact
  @Post('/add')
  async addContact(@Res() res, @Body() createContactDTO: CreateContactDTO) {
    const contact = await this.contactService.addContact(createContactDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Contact has been added successfully',
      contact,
    });
  }
  // Getting a contact by his id
  @Get('contact/:cont_id')
  async getContact(@Res() res, @Param('cont_id') cont_id) {
    const contact = await this.contactService.getContact(cont_id);
    if (!contact) {
      throw new NotFoundException('Contact does not exist!');
    }
    return res.status(HttpStatus.OK).json(contact);
  }
  // Update a contact
  @Put('/update')
  async updateContact(
    @Res() res,
    @Query('cont_id') cont_id,
    @Body() createContactDTO: CreateContactDTO,
  ) {
    const contact = await this.contactService.updateContact(
      cont_id,
      createContactDTO,
    );
    if (!contact) {
      throw new NotFoundException('Contact does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Contact has been successfully updated',
      contact,
    });
  }
  // Delete a contact
  @Delete('/delete')
  async deleteContact(@Res() res, @Query('cont_id') cont_id) {
    const contact = await this.contactService.deleteContact(cont_id);
    if (!contact) {
      throw new NotFoundException('Contact does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Contact has been successfully deleted',
      contact,
    });
  }
}
