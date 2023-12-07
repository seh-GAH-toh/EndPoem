export const useName = () => useState<string>("name", () => "");
export const useSubmitted = () => useState<boolean>("submitted", () => false);
export const useCredits = () => useState<boolean>("credtis", () => false);
