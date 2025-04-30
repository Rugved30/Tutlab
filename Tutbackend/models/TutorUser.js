const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const TutorUser = mongoose.models.TutorUser || mongoose.model('TutorUser',tutorSchema);

module.exports = TutorUser