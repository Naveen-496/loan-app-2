import { Customer } from "../models/customers";

export class CustomerService {
  constructor() {}

  public async saveCustomer(
    firstname: string,
    lastname: string,
    phoneNumber: string,
    address?: string
  ) {
    const customer = new Customer({
      firstname,
      lastname,
      phoneNumber,
      address,
    });

    return await customer.save();
  }

  public async findAll() {
    return await Customer.find();
  }
}
