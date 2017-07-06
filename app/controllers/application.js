import Ember from 'ember';

export default Ember.Controller.extend({

  restaurant: {
    name: 'road kill cafe',
    yearsOpen: 52
  },
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    wasClicked(elementName) {
      alert(`${elementName} was clicked`)
    },
    makeUnavailable(food) {
      Ember.set(food, 'isAvailable', false)
      food.save();
    },
    makeAvailable(food) {
      Ember.set(food, 'isAvailable', true)
      food.save();
    },
    saveNewItem(newItem) {
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    deleteIt(food){
      food.destroyRecord()
    }
  }
});
