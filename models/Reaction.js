const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // https://stackoverflow.com/questions/32320342/mongoose-schema-default-value-for-objectid
            type: Schema.Types.ObjectId,
            default: reactionId.id
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: date => date.toDateString(),
        },
    },
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;