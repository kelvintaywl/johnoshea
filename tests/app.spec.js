const request = require('supertest');
const express = require('express');
const app = require('../src/app');

const agent = request.agent(app);

describe('GET /healthz', () => {
  it('should return HTTP 200', async () => {
    await agent
      .get('/healthz')
      .expect(200);
  });
});

describe('GET /', () => {
  test('should return HTTP 200 with text/html body', async () => {
    await agent
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});
