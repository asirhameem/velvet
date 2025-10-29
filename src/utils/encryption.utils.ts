import * as crypto from 'crypto';
import config from '@/configs/config';

const algorithm = 'aes-256-cbc';
const key = Buffer.from(config.encryption.key, 'hex');
const iv = Buffer.from(config.encryption.iv, 'hex');

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

export const decrypt = (text: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
