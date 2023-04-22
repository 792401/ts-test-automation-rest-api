// src/reqres.api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const createUser = (data: { name: string; job: string }) =>
  api.post('/users', data);

export const getUser = (id: number) => api.get(`/users/${id}`);

export const updateUser = (id: number, data: { name?: string; job?: string }) =>
  api.put(`/users/${id}`, data);

export const deleteUser = (id: number) => api.delete(`/users/${id}`);
