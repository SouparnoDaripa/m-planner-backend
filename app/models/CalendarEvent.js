const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CalendarEvent = new Schema({
    calendarEventId: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    start: {
        type: Date,
        default: ''
    },
    end: {
        type: Date,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    allDay: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        default: ''
    },
    createdBy: {
        type: String,
        default: ''
    },
    createdOn: {
        type: Date,
        default: ''
    },
    modifiedOn: {
        type: Date,
        default: ''
    }
});

mongoose.model('CalendarEvent', CalendarEvent);