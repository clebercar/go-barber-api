import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',
  config: {
    redis: {
      host: 'gobarber_redis',
      port: 6379,
      password: undefined,
    },
  },
} as ICacheConfig;
