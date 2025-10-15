import { nanoid } from "nanoid";
import Url from '../models/url.models.js'


const handleGenerateUrl = async function(req , res) {

const shortUrl = `http://localhost:5000/api/${nanoid(4)}`
const createdUrl = await Url.create({
    shortUrl,
    redirectUrl : req.body.url,
    clicks : [],
})
console.log(createdUrl)
return res.send(createdUrl)

}


const handleRedirectUrl = async function(req , res) {
const findOrignalUrl  = await Url.findOneAndUpdate(
{shortUrl : `http://localhost:5000/api/${req.params.id}`} 
,{$push : {clicks : { timestamp: Date.now() }}} 
,{new : true})
res.redirect(findOrignalUrl.redirectUrl)
}

const handleAnalytics = async function(req , res) {
    const findUrl = await Url.findOne(
        {
        shortUrl : `http://localhost:5000/api/${req.params.id}` 
        }
    )
    res.send(`total clicks on url : ${findUrl.clicks.length}\n`)
}

const handleHome = function(req , res) {
    res.render('../view/home.ejs')
}


const handleInfo = async function(req , res) {
    const allUrls = await Url.find({})
    console.log(allUrls)
    return res.render('../view/info.ejs' , {
        urls : allUrls
    })
}



export {handleGenerateUrl , handleRedirectUrl , handleAnalytics , handleHome , handleInfo}