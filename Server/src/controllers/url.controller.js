import { nanoid } from "nanoid";
import Url from '../models/url.models.js'


const handleGenerateUrl = async function(req , res) {
const user = req?.user
const redirectUrl =  req?.body?.url
if(!redirectUrl) {
    return res
    .status(404)
    .json({
        status : 404,
        message : 'no valid url provided',
    })
}
const shortUrl = `http://localhost:5000/api/${nanoid(4)}`
const createdUrl = await Url.create({
    shortUrl,
    redirectUrl,
    clicks : [],
    adminId : user._id
})

if(! createdUrl) {
    return res
    .status(500)
    .json({
        status : 500,
        message : 'something went wrong',
    })
}

// console.log(createdUrl)

return res
.status(201)
.json({
    status : 201,
    message : 'url created successfully',
    shortUrl,
})
}

const handleRedirectUrl = async function(req , res) {
// console.log(req.params.id)

const findOrignalUrl  = await Url.findOneAndUpdate(
{shortUrl : `http://localhost:5000/api/${req.params.id}`},
{
    $push: {
      clicks: {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
    }
  },
{new : true})
res.redirect(findOrignalUrl?.redirectUrl)
// console.log(findOrignalUrl?.redirectUrl)

}

const handleUrlInfo = async function(req , res) {
   try {
     const url = await Url.findOne(
         {
         shortUrl : `http://localhost:5000/api/${req.params.id}` 
         }
     )
     
     if(!url) {
         return res
         .status(404)
         .json({
             status : 404,
             message : 'no such url is registered'
         })
     }
     return res
     .status(200)
     .json({
         status : 200,
         message : 'url data fetched successfully',
         url,
     })
   } catch (error) {
    console.log('error' , error)
   }
}

const handleAnalytics = async function(req , res) {
  console.log('working')  
try {
    const user = req?.user
    const urls = await Url.find({adminId : user._id})
    
    if(! urls) {
        return res
        .status(500)
        .json({
            status : 500,
            message : 'something went wrong',
        })
    }

    return res
    .status(200)
    .json({
        status : 200,
        message : 'all urls fetched sucessfully',
        urls,
    })

} catch (error) {
    console.log('error' , error)
}

}

const handleDelete = async function(req , res) {
    const id = req?.params?.id
    // console.log(id)
    const url = await Url.findOneAndDelete({shortUrl :  `http://localhost:5000/api/${id}`})
    if(!url) {
        return res
        .status(500)
        .json({
            status : 500,
            message : 'something went wrong',
        })
    }
    return res
    .status(200)
    .json({
        status : 200,
        message : 'url deleted successfully',
    })
}


export {handleGenerateUrl,
        handleRedirectUrl,
        handleAnalytics,
        handleUrlInfo,
        handleDelete,
       }
