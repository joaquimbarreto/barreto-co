import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
const Languages = [
  {
    key: 'it',
    text: 'Italiano',
    value: 'it',
  },
  {
    key: 'en',
    text: 'English',
    value: 'en',
  },
  {
    key: 'pt',
    text: 'Português',
    value: 'pt',
  },
];

const DropdownLanguageSelection = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChange = (e, data) => {
    i18n.changeLanguage(data.value);
  };

  return (
    <Dropdown
      onChange={handleChange}
      fluid
      selection
      value={currentLanguage}
      options={Languages}
    />
  );
};

export default DropdownLanguageSelection;
