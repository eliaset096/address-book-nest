import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDTO } from './dto/contact.dto';

@Injectable()
export class ContactService {
  //
  constructor(@InjectModel('Contact') private contactModel: Model<Contact>) {}
  //
  async getContacts(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }
  //
  async addContact(createContactDTO: CreateContactDTO): Promise<Contact> {
    const contact = new this.contactModel(createContactDTO);
    return contact.save();
  }
  //
  async getContact(cont_id: string): Promise<Contact> {
    return this.contactModel.findById(cont_id).exec();
  }

  /*
  findByFirstName(firstName: string): Promise<Contact> {
    const contact = this.contactModel.fi
  }

  findByLastName(): void {}

  findByFullName() {}
  */

  async updateContact(
    cont_id: string,
    createContactDTO: CreateContactDTO,
  ): Promise<Contact> {
    return this.contactModel.findByIdAndUpdate(cont_id, createContactDTO, {
      new: true,
    });
  }

  async deleteContact(cont_id: string): Promise<Contact> {
    return this.contactModel.findByIdAndDelete(cont_id);
  }
}
