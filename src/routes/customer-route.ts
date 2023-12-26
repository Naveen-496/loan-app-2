import express, { Request, Response } from "express";
import { CustomerService } from "../services/customer-service";

const router = express.Router();
const customerService = new CustomerService();

router.post("/", async (req: Request, res: Response) => {
  const { firstname, lastname, phoneNumber, address } = req.body;
  console.log(req.body);
  const result = await customerService.saveCustomer(
    firstname,
    lastname,
    phoneNumber,
    address
  );
  return res.status(201).json(result);
});

router.get("/", async (req: Request, res: Response) => {
    return await customerService.findAll();
})


export default router;