import { existsSync, readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import logger from './logger.js';

export class YamlHandler {
  static loadYamlFile(filePath: string) {
    if (!existsSync(filePath)) return {};
    try {
      const doc = yaml.load(readFileSync(filePath, 'utf-8'));
      logger.info(`${doc}`);
    } catch (error: unknown) {
      if (error instanceof Error && error?.message) {
        logger.error(`Error loading YAML file path ${filePath}: ${error.message}`);
      } else {
        logger.error(`Unknow Error loading YAML file path ${filePath}: ${error}`);
      }
    }
  }
}
