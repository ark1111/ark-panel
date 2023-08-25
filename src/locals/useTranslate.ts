import { useTranslation } from "react-i18next";

export const useTranslate = () => {
  const { t, i18n } = useTranslation();
  let language = i18n.language;
  const translate = (text: string) => {
    return t(text.toLowerCase());
  };
  return { translate, language };
};
