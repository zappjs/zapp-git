import { IGenerator, generate } from '@zappjs/core';
import { HandlebarsEngine } from '@zappjs/handlebars';
import * as fs from 'fs';
import * as path from 'path';

import { IGitignoreSpec } from '../interfaces';
import { GitignoreSchema } from '../schemas';

export const GitignoreGenerator: IGenerator<IGitignoreSpec> = (spec) => generate({
  engine: HandlebarsEngine,
  schema: GitignoreSchema,
  spec,
  template: fs.readFileSync(path.join(__dirname, '../../src/templates/gitignore.hbs'), 'utf8')
});
