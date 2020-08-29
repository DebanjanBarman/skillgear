const Course = require("./../models/courseModel");
const catchAsync = require('../utils/catchAsync')
const AppError = require("../utils/appError");

exports.getAllCourses = catchAsync(async (req, res, next) => {
	//Build query
	// 1) Filtering
	const queryObj = {...req.query};
	const excludedFields = ['page', 'sort', 'limit', 'fields']
	excludedFields.forEach(el => delete queryObj[el]);
	
	// 2) Advanced filtering
	let queryStr = JSON.stringify(queryObj)
	queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
	
	let query = Course.find(JSON.parse(queryStr))
	
	if (req.query.fields) {
		const fields = req.query.fields.split(',').join(' ');
		query = query.select(fields)
	} else {
		query = query.select('name author photo lessonNo');
	}
	const courses = await query;
	
	res.status(200).json({
		message: "success",
		data: {
			courses,
		},
	});
});

exports.getCourse = catchAsync(async (req, res, next) => {
	const course = await Course.findById(req.params.id);
	
	if (!course) {
		return next(new AppError('No Course found with that id', 404))
	}
	
	res.status(200).json({
		message: "success",
		data: {
			course,
		},
	});
});

exports.createCourse = catchAsync(async (req, res, next) => {
	const newCourse = await Course.create(req.body);
	
	res.status(201).json({
		message: "success",
		data: {
			newCourse,
		},
	});
});

exports.updateCourse = catchAsync(async (req, res, next) => {
	const course = await Course.findByIdAndUpdate(req.params.id, req.body);
	
	if (!course) {
		return next(new AppError('No Course found with that id', 404))
	}
	
	res.status(202).json({
		message: "success",
		data: {
			course,
		},
	});
});

exports.deleteCourse = catchAsync(async (req, res, next) => {
	const course = await Course.findByIdAndDelete(req.params.id);
	
	if (!course) {
		return next(new AppError('No Course found with that id', 404))
	}
	
	res.status(204).json({
		message: "success",
		data: null,
		
	});
});
