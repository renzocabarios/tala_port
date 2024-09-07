import request from 'supertest';
import app from '../app';

describe('user controller', () => {
  it('should create a user', async () => {
    const user = {
      walletAddress: '0xE0a3D6957DA940763550AeFc266614510b4082A6',
    };

    await request(app)
      .post('/api/v1/users')
      .send({
        ...user,
      });

    const response = await request(app).get('/api/v1/users');

    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.data[0].walletAddress).toBe(user.walletAddress);
  });

  it('should get wallet by address', async () => {
    const user = {
      walletAddress: '0xE0a3D6957DA940763550AeFc266614510b4082A6',
    };

    await request(app)
      .post('/api/v1/users')
      .send({
        ...user,
      });

    const response = await request(app).get(`/api/v1/users/${user.walletAddress}/wallet-address`);
    expect(response.body.data[0].walletAddress).toBe(user.walletAddress);
  });

  it('should create user account if user does not exist', async () => {
    const user = {
      walletAddress: '0xE0a3D6957DA940763550AeFc266614510b4082A6',
    };

    const response = await request(app).get(`/api/v1/users/${user.walletAddress}/wallet-address`);
    expect(response.body.data[0].walletAddress).toBe(user.walletAddress);

    // Create teest case for this
    // it('should not update user if user already exist', async () => {
    //   const response = await request(app).get(`/api/v1/users/${user.walletAddress}/wallet-address`);
    //   expect(response.body.data[0].walletAddress).toBe(user.walletAddress);
    // });
  });
});
