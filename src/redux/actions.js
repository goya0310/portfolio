export const CHANGE_LANGUAGUE = "CHANGE_LANGUAGUE";

export function changeLanguage(isChecked) {
  return {
    type: CHANGE_LANGUAGUE,
    payload: isChecked,
  };
}
