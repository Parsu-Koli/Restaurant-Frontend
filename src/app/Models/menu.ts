export interface Menu {
  id?: number;
  name: string;
  description?: string;
  categoryId: number;
  price: number;
  isAvailable: boolean;
}