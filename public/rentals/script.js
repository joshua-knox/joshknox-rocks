formElement = document.querySelector('form');
formElement.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  const {
    "check-in": {
        value: checkIn
    },
    "check-out": {
        value: checkOut
    },
    guests: {
        value: guests
    },
    location: {
        value: location
    }
  } = formElement.elements

  const request = {
    location: location,
    guests: {
        total: guests
    },
    dates: [checkIn, checkOut] 
  };

    console.log(request);
});
