const request = require('supertest');
const app = require('../app');

describe('Registro de usuarios', () => {
  it('debería registrar un nuevo usuario', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({ name: "Juan Pérez", email: "juan@correo.com" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Juan Pérez');
  });

  it('debería retornar todos los usuarios', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});