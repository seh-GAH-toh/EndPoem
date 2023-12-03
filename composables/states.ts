export const useName = () => useState<string>("name", () => "");
export const useSubmitted = () => useState<boolean>("submitted", () => false);
