import { CompanyService } from './company.service.js'
import {type Request, type Response } from 'express';

// 1. Instanciar o serviço para poder usar suas funções
const companyService = new CompanyService();

export class CompanyController {
  async create(request: Request, response: Response): Promise<void> {
    try {
      const { name } = request.body;

      const newCompany = await companyService.createCompany(name);

      response.status(201).json({
        success: true,
        data: newCompany,
      });
    } catch (error: any ) {
      response.status(400).json({
        success: false,
        error: error.message || 'Erro ao criar a Empresa'
      })
    }
  }

  async listCompanies(request: Request, response: Response): Promise<void> {
    try {
      const companies = await companyService.listCompanies();

      response.status(200).json({
        success: true,
        data: companies
      });
    } catch (error: any) {
      response.status(404).json({
        success: false,
        error: error.message || 'Erro interno ao buscar empresas'
      })
    }
  }
}