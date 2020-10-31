interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'cleber.carvalho@clebercarvalho.com.br',
      name: 'Cleber Carvalho',
    },
  },
} as IMailConfig;
