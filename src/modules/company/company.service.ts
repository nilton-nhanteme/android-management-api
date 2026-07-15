import { prisma } from '../../config/database.js';

export class CompanyService {
  /**
   * Cria um novo cliente SaaS (Company) no banco de dados local
   */
  async createCompany(name: string) {
    if (!name || name.trim() === '') {
      throw new Error('O nome da empresa é obrigatório.');
    }

    // Cria o registro no banco usando Prisma Client com tipagem automática
    const company = await prisma.company.create({
      data: {
        name: name.trim(),
        // O amapiEnterpriseId começa nulo porque o fluxo com o Google acontece depois
        amapiEnterpriseId: null,
      },
    });
    return company;
  }

  /**
   * Lista todas as empreas cadastradas
   */ 
  async listCompanies() {
    return await prisma.company.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });
  }
}