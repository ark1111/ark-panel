import { useTranslation } from "react-i18next";

export const useTranslate = () => {
  const { t } = useTranslation();
  const translate = (text: string) => {
    return t(text.toLowerCase());
  };
  return { translate };
};
