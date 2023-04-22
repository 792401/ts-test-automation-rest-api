// src/reqres.test.ts
import { createUser, getUser, updateUser, deleteUser } from './api';

describe('Reqres API CRUD tests', () => {
  let userId: number;

  test('Create user', async () => {
    const response = await createUser({ name: 'John Doe', job: 'developer' });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    userId = response.data.id;
  });

  test('Get user', async () => {
    const response = await getUser(userId);
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty('id', userId);
  });

  test('Update user', async () => {
    const response = await updateUser(userId, { name: 'Jane Doe', job: 'designer' });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('updatedAt');
  });

  test('Delete user', async () => {
    const response = await deleteUser(userId);
    expect(response.status).toBe(204);
  });
});
