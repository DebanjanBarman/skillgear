const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Course name is required"],
        },
        author: {
            type: String,
            required: [true, 'Course must have a author'],
        },
        photo: {
            type: String,
            required: [true,'A cover photo is required'],
        },
        lessonNo: {
            type: Number,
            required: [true,'Please enter how many videos are there']
        },
        content: [{
            url: String,
            title: String,
            duration: String,
        }],
        realiseDate: {
            type: Date,
            default: Date.now(),
            select: false
        }
    }, {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);


const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
