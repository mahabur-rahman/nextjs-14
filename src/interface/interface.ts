export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    phone: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }
  