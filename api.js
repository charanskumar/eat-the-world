//Currencies//
import axios from "axios";

const options = {
  method: "GET",
  url: "https://restaurants222.p.rapidapi.com/currencies",
  headers: {
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

//Languages//
import axios from "axios";

const options = {
  method: "GET",
  url: "https://restaurants222.p.rapidapi.com/languages",
  headers: {
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

//Typeahead//
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.set("q", "las");
encodedParams.set("language", "en_US");

const options = {
  method: "POST",
  url: "https://restaurants222.p.rapidapi.com/typeahead",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
  data: encodedParams,
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

//Search//
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.set("location_id", "297704");
encodedParams.set("language", "en_US");
encodedParams.set("currency", "USD");
encodedParams.set("offset", "0");

const options = {
  method: "POST",
  url: "https://restaurants222.p.rapidapi.com/search",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
  data: encodedParams,
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

//Details//
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.set("location_id", "15333482");
encodedParams.set("language", "en_US");
encodedParams.set("currency", "USD");

const options = {
  method: "POST",
  url: "https://restaurants222.p.rapidapi.com/detail",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
  data: encodedParams,
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

//Photos//
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.set("location_id", "15333482");
encodedParams.set("currency", "USD");
encodedParams.set("language", "en_US");
encodedParams.set("offset", "0");

const options = {
  method: "POST",
  url: "https://restaurants222.p.rapidapi.com/photos",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "e13cbf9cc2msh8f651d59c48ad12p1257c3jsncfb4fff24a34",
    "X-RapidAPI-Host": "restaurants222.p.rapidapi.com",
  },
  data: encodedParams,
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
