Template.comments.helpers({
	nonAdmin: function() {
			var adminId = Meteor.users.findOne({username: 'Admin'})._id;
			var userId = Meteor.userId();
			if (userId !== adminId) {
			return true;
			}
		},

    comms: function() {
      var comms = Comments.find({}, {sort: {createdAt: -1}});
      return comms;
    },
});
