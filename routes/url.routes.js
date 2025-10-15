import express from 'express'
import { Router } from 'express'
import {handleGenerateUrl , handleRedirectUrl , handleAnalytics , handleHome , handleInfo} from '../controllers/url.controller.js'
import {authorizeUser} from '../middlewares/user.auth.js'


const urlRoutes = Router();
urlRoutes.route('/home').get(authorizeUser(['ADMIN' , 'NORMAL']) , handleHome)
urlRoutes.route('/generate').post(authorizeUser(['ADMIN' , 'NORMAL']) , handleGenerateUrl)
urlRoutes.route('/:id').get(authorizeUser(['ADMIN' , 'NORMAL']) , handleRedirectUrl)
urlRoutes.route('/analytics/:id').get(authorizeUser(['ADMIN' , 'NORMAL']) , handleAnalytics)
urlRoutes.route('/info').get(authorizeUser(['ADMIN']) , handleInfo)
export default urlRoutes