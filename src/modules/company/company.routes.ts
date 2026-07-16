import { Router } from 'express';
import { CompanyController } from './company.controller.js';

const companyRouter = Router();
const companyController = new CompanyController();

// POST /api/v1/companies -> Cria uma nova empresa
companyRouter.post('/', companyController.create);

// GET /api/v1/companies -> Lista empresas
companyRouter.get('/', companyController.listCompanies);

export { companyRouter };