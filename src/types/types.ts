import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";

export type Location = {
  latitude: number;
  longitude: number;
};
export type LoadingErrorViewProps = {
sightings : Sighting[];
error?: string;
loading?: boolean;
noDataMessage?: string;
};
export type Sighting = {
  id: string;
  witnessName: string;
  location: Location;
  description: string;
  picture: string;
  status: string;
  dateTime: string;
  witnessContact: string;
};

export type FormState = {
  name: string;
  contact: string;
  latitude: string;
  longitude: string;
  description: string;
  picture: string;
  status: string;
  dateTime: string;
};
export interface InputProps extends TextInputProps {
}