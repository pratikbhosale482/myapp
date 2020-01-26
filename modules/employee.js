//create package
var mongoose = require('mongoose');
//create connection
mongoose.connect('mongodb://localhost/employee', {useNewUrlParser:true});
//connection object 
var conn=mongoose.connection;
//create schema 
var employeeSchema = new mongoose.Schema({
name:String,
email:String,
etype:String,
hourlyrate:Number,
totalHour:Number,
total:Number,
});
//create model
var employeModel = mongoose.model('Employee',employeeSchema);
module.exports=employeModel;