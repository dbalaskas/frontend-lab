import * as yup from 'yup';
import { MAIL_REGEX } from '~/app/contstants/Regex';

yup.addMethod(yup.string, 'customEmail', function (message?: string) {
  return this.matches(
    MAIL_REGEX,
    message || 'Must be a valid email address with a valid top-level domain'
  );
});

export default yup;
