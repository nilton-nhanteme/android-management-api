import { Router } from 'express';
import { CompanyController } from './company.controller.js';

const companyRouter = Router();
const companyController = new CompanyController();

// POST /api/v1/companies -> Cria uma nova empresa
companyRouter.post('/companies', companyController.create);

// GET /api/v1/companies -> Lista empresa
companyRouter.get('/companies', companyController.listCompanies);

export { companyRouter };