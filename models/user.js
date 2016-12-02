var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	identity: {
		first_name: String,
		last_name: String,
		email: String
	},

	VOD: {
		credit: Number,
		last_rented_video: String,
		rented_videos: {
			type:  Array,
			items: [{
				title: String,
				type: String,
				genre:[{
					movie: String
				}],
				rented_episodes: [{
					episode : String
				}],
				total_price: Number
			}]
		}
	},

	home: {
		entry_time: Date,
		exit_time: Date,
		consomation: {
			water: Number,
			electricity: Number
		},
		forecast:{
			weather: String,
			temperature_celsius: Number,
			temperature_fahrenheit: Number,
			humidity: String
		},
		lock: String
	},

	networks: [{
		longitude: Number,
		latitude: Number,
		hotspotId: String,
		city: String,
		place: String,
		postalCode: String,
		name: String,
		distance: Number,
		state: String,
		company: String,
		website: String,
		ssid: String,
		clients: Number
	}],

	phone_plan: {
		subscription: String,
		phone_number: String,
		consomation: {
			calls: String,
			data: String,
			sms: Number
		}
	}
});


var User = module.exports = mongoose.model('User',userSchema);

// Get User
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

// Get User By Id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserIdentityById = function(id, callback){
	User.findById(id, callback).select('identity');
}

module.exports.getUserVodById = function(id, callback){
	User.findById(id, callback).select('VOD');
}

module.exports.getUserHomeById = function(id, callback){
	User.findById(id, callback).select('home');
}

module.exports.getUserNetworksById = function(id, callback){
	User.findById(id, callback).select('networks');
}

module.exports.getUserPhonePlanById = function(id, callback){
	User.findById(id, callback).select('phone_plan');
}
