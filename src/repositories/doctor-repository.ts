import { Doctor } from '@/models/Doctor'

export interface DoctorRepository {
  create(data: Omit<Doctor, 'id'>): Promise<Doctor>
  update(
    data: Omit<Doctor, 'email' | 'crm' | 'specialty' | 'activated'>,
  ): Promise<Doctor>
  findByCrm(crm: string): Promise<Doctor | null>
  findByEmail(email: string): Promise<Doctor | null>
  findById(id: string): Promise<Doctor | null>
  findManyDoctors(page: number): Promise<Doctor[]>
}
