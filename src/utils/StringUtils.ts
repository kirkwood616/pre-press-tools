export function removeAtAndAddress(inputString: string): string {
  const regex = /@\S+/g;
  return inputString.replace(regex, "");
}

export function getFirstLetter(inputString: string): string {
  return inputString[0];
}
