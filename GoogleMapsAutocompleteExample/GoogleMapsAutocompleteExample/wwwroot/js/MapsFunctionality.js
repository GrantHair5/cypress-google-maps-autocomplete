const locationInput = document.getElementById("locationInput");
const latInput = document.getElementById("lat");
const lngInput = document.getElementById("lng");
const ENTER_KEY = 13;

const GOOGLE_PLACES_AUTOCOMPLETE_OPTIONS = {
    componentRestrictions: { country: "GB" },
    types: ["geocode"]
};

const { maps } = window.google;

const autocomplete = new maps.places.Autocomplete(
    locationInput,
    GOOGLE_PLACES_AUTOCOMPLETE_OPTIONS
);

maps.event.addDomListener(
    locationInput,
    "keydown",
    e => event.keyCode === ENTER_KEY && e.preventDefault()
);

autocomplete.addListener("place_changed",
    () => {
        var place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        latInput.value = lat;
        lngInput.value = lng;
    });