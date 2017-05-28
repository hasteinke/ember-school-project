import Ember from 'ember';

export default Ember.Controller.extend({
  foods: [{
      name: 'tacos',
      isAvailable: true
    },
    {
      name: 'burgs',
      isAvailable: true
    },
    {
      name: 'dogs',
      isAvailable: false
    },
    {
      name: 'pizza',
      isAvailable: true
    },
    {
      name: 'fish',
      isAvailable: false
    }
  ],
  restaurant: {
    name: 'road kill cafe',
    yearsOpen: 52
  },
  actions: {
    wasClicked(elementName) {
      alert(`${elementName} was clicked`)
    },
    makeUnavailable(food) {
      Ember.set(food, 'isAvailable', false)
    },
    makeAvailable(food) {
      Ember.set(food, 'isAvailable', true)
    }

  }


});
