import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(async () => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const userOne = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '12345678',
    });

    const userTwo = await fakeUsersRepository.create({
      name: 'Jhon Trê',
      email: 'jhontre@example.com',
      password: '12345678',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Jhon Qua',
      email: 'jhonqua@example.com',
      password: '12345678',
    });

    const providers = await listProviders.execute({ user_id: loggedUser.id });

    expect(providers).toEqual([userOne, userTwo]);
  });
});
