import { Platform } from "react-native"

export const platformOS = (platform) => {
  const platformExists = Platform.OS === platform;

  return platformExists;
}