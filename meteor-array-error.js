if (Meteor.isClient) {
  Template.body.helpers({
    values: function() {
      var array = [];
      array[9] = 9;
      return array;
    }
  });
}
