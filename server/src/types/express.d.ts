import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      user?: any; // Replace `any` with the actual type of `user`, e.g., your `User` model
    }
  }
}
