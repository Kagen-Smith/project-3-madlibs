import type { Request, Response } from 'express';
import User from '../models/user';
import { signToken } from '../config/jwt';