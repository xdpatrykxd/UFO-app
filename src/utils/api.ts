const API_URL = "https://sampleapis.assimilate.be/ufo/sightings";
const TOKEN =
  "REDACTED";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export const getSightings = async () => {
  try {
    const response = await fetch(API_URL, { headers });
    if (!response.ok) throw new Error("Failed to fetch sightings");
    return response.json();
  } catch (error) {
    return [];
  }
};

export const postSighting = async (sighting: {
  witnessName: string;
  witnessContact: string;
  location: { latitude: number; longitude: number };
  description: string;
  picture: string;
  status: string;
  dateTime: string;
}) => {
  const API_URL = "https://sampleapis.assimilate.be/ufo/sightings";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(sighting),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Failed to post sighting");
    }

    return await response.json(); 
  } catch (error) {
    return null; 
  }
};

export const getSightingsWithQuery = async (query: string) => {
  try {
    const url = `${API_URL}?${query}`;
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error("Failed to fetch filtered sightings");
    return response.json();
  } catch (error) {
    return [];
  }
};
