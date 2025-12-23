import express from 'express'
import { Router } from 'express'
import {handleGenerateUrl , handleRedirectUrl , handleAnalytics , handleUrlInfo , handleDelete} from '../controllers/url.controller.js'
import { authenticateUser } from '../middlewares/Authentication.js'


const urlRoutes = Router();

urlRoutes.post('/create' , authenticateUser , handleGenerateUrl)
urlRoutes.get('/analytics' , authenticateUser , handleAnalytics)
urlRoutes.get('/info/:id' , authenticateUser , handleUrlInfo)
urlRoutes.post('/delete/:id' , authenticateUser , handleDelete)
urlRoutes.get('/:id' , handleRedirectUrl)


export default urlRoutes