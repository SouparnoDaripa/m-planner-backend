const mongoose = require('mongoose');
const validator = require('../lib/validator');
const response = require('../lib/response');
const shortid = require('shortid');
const time = require('../lib/timezone');

const CalendarEventModel = mongoose.model('CalendarEvent');

let createCalendarEvent = (req, res) => {
    console.log(req.body);
    let validateEventData = () => {
        return new Promise((resolve, reject) => {
            if (req.body.start){
                if(validator.isEmpty(req.body.start)){
                    let apiResponse = response.generateResponse(true, 'Start date should not be blank', 400, null);
                    reject(apiResponse);
                } else if(validator.isEmpty(req.body.title)) {
                    let apiResponse = response.generateResponse(true, 'Title should not be blank', 400, null);
                    reject(apiResponse);
                } else {
                    resolve(req);
                }
            } else {
                let apiResponse = response.generateResponse(true, 'One or more parameter(s) is missing', 400, null);
                reject(apiResponse);
            }
        });
    }

    let saveCalendarEvent = () => {
        return new Promise((resolve, reject) => {
            let newEvent = new CalendarEventModel({
                calendarEventId : shortid.generate(),
                start : req.body.start,
                end : (req.body.end)? req.body.end: '',
                color: req.body.color,
                title : req.body.title,
                allDay : req.body.allDay,
                userId : req.body.userId,
                createdBy : req.body.createdBy,
                createdOn : time.now(),
                modifiedOn : time.getLocalTime()
            });
            newEvent.save((err, newEvent) => {
                console.log(" save user..");
                if (err){
                    console.log(err);
                    let apiResponse = response.generateResponse(true, 'Failed to create new event', 500, null);
                    reject(apiResponse);
                } else{
                    let newEventObj = newEvent.toObject();
                    resolve(newEventObj);
                }
            });
        });
    }

    validateEventData(req, res)
    .then(saveCalendarEvent)
    .then((resolve) => {
        delete resolve._id;
        delete resolve.__v;
        let apiResponse = response.generateResponse(false, 'Event created successfully', 200, resolve);
        res.send(apiResponse);
    })
    .catch((err) => {
        res.send(err);
    });
}

let updateCalendarEvent = (req, res) => {
    let validateEventData = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body);
            CalendarEventModel.findOne({calendarEventId : req.body.id})
            .exec((err, retrieveEventDetails) => {
                if(err) {
                    let apiResponse = response.generateResponse(true, 'Error in updating calendar event', 500, null);
                    reject(apiResponse);
                } else if(!validator.isEmpty(retrieveEventDetails)){
                    if(req.body.start){
                        retrieveEventDetails.start = req.body.start
                    }
                    if(req.body.end){
                        retrieveEventDetails.end = req.body.end
                    }
                    if(req.body.title){
                        retrieveEventDetails.title = req.body.title
                    }
                    if(req.body.color){
                        retrieveEventDetails.color = req.body.color
                    }
                    if(req.body.allDay){
                        retrieveEventDetails.allDay = req.body.allDay
                    }
                    
                    retrieveEventDetails.save((err, updatedEvent) => {
                        console.log(" save user..");
                        if (err){
                            let apiResponse = response.generateResponse(true, 'Failed to update the event', 500, null);
                            reject(apiResponse);
                        } else{
                            let updatedEventObj = updatedEvent.toObject();
                            resolve(updatedEventObj);
                        }
                    });
                } else {
                    let apiResponse = response.generateResponse(true, 'Event does not exist', 500, null);
                    reject(apiResponse);
                }
            });
        });
    }

    validateEventData(req, res)
    .then((resolve) => {
        delete resolve._id;
        delete resolve.__v;
        let apiResponse = response.generateResponse(false, 'Event updated successfully', 200, resolve);
        res.send(apiResponse);
    })
    .catch((err) => {
        res.send(err);
    });
}

let deleteCalendarEvent = (req, res) => {
    let validateEventData = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body);
            CalendarEventModel.find({calendarEventId : req.body.id })
            .deleteOne()
            .exec((err, deletedEventDetails) => {
                if(err) {
                    let apiResponse = response.generateResponse(true, 'Error in deleting calendar event : ' + err, 500, null);
                    reject(apiResponse);
                } else if(!validator.isEmpty(deletedEventDetails)) {
                    resolve(deletedEventDetails);
                } else {
                    let apiResponse = response.generateResponse(true, 'Event does not exist', 500, null);
                    reject(apiResponse);
                }
            });
        });
    }

    validateEventData(req, res)
    .then((resolve) => {
        delete resolve._id;
        delete resolve.__v;
        let apiResponse = response.generateResponse(false, 'Event deleted successfully', 200, resolve);
        res.send(apiResponse);
    })
    .catch((err) => {
        res.send(err);
    });
}

let fetchAllEvents = (req, res) => {
    CalendarEventModel.find()
    .exec((err, retrieveEventDetails) => {
        if(err) {
            let apiResponse = response.generateResponse(true, 'Error in fetching calendar events', 500, null);
            res.send(apiResponse);
        } else if(validator.isEmpty(retrieveEventDetails)){
            let apiResponse = response.generateResponse(false, 'No events found', 200, []);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generateResponse(false, 'All records fetched sucessfully', 200, retrieveEventDetails);
            res.send(apiResponse);
        }
    });
}

let fetchEventsByUserId = (req, res) => {
    CalendarEventModel.find({userId : req.params.userId})
    .exec((err, retrieveEventDetails) => {
        if(err) {
            let apiResponse = response.generateResponse(true, 'Error in fetching calendar events', 500, null);
            res.send(apiResponse);
        } else if(validator.isEmpty(retrieveEventDetails)){
            let apiResponse = response.generateResponse(false, 'No events found', 200, []);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generateResponse(false, 'All records fetched sucessfully', 200, retrieveEventDetails);
            res.send(apiResponse);
        }
    });
}


module.exports = {
    createCalendarEvent: createCalendarEvent,
    updateCalendarEvent: updateCalendarEvent,
    deleteCalendarEvent: deleteCalendarEvent,
    fetchAllEvents: fetchAllEvents,
    fetchEventsByUserId: fetchEventsByUserId
}