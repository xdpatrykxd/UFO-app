export const validateSightingForm = (formState: { name: any; latitude: any; longitude: any; description: any; picture: any; }): string | null => {
    const { name, latitude, longitude, description, picture } = formState;
  
    if (!name || !latitude || !longitude || !description || !picture) {
      return 'Please fill in all required fields: Name, Latitude, Longitude, Description, and Picture.';
    }
  
    if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
      return 'Latitude and Longitude must be valid numbers.';
    }
    return null;
  };  