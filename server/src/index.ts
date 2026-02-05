import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const PORT : string = process.env.PORT  || 8086;

const corsConfiguration = {
    allowedOrigins : [''],
    allowedMethods : ['PUT', 'GET', 'POST', 'DELETE', 'PATCH' ]
};

const rateLimitConfiguration = 



