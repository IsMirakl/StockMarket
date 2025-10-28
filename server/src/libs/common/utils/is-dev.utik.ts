import * as dotenv from 'dotenv'

import { ConfigService } from '@nestjs/config'

dotenv.config()

export const isDev = (ConfigService: ConfigService) =>
	ConfigService.getOrThrow('NODE_ENV') === 'development'

export const IS_DEV_ENV = process.env.NODE_ENV === 'development'
