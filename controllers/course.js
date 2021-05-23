const courseSchema = require('../models/course.js')

const courseModel = async (req, res)=>{
    try {
        const courses = await courseSchema.find()
        if (courses){
          return  res.json({courses})
        } else{
            return res.status(400).json({msg: 'Wahala be like bicycle 🤣'})
        }
    } catch (error) {
         return res.status(400).json({ msg: 'Wahala be like bicycle 🤣', error })
    }
}

module.exports = {courseModel}