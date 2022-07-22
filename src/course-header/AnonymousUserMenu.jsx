import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import genericMessages from '../generic/messages';
  
function AnonymousUserMenu({ intl }) {
  return (
    <div>
    <FontAwesomeIcon icon="far fa-eye" />
    <a className='courses-link' href={`${getConfig().LMS_BASE_URL}/courses`}>{intl.formatMessage(genericMessages.Explore)}</a>
      <Button
      className='login-button'
        variant="primary"
        href={`${getLoginRedirectUrl(global.location.href)}`}
      >
        {intl.formatMessage(genericMessages.signInSentenceCase)}
      </Button>
      <Button
        className="mr-3 register-button"
        variant="outline-primary"
        href={`${getConfig().LMS_BASE_URL}/register?next=${encodeURIComponent(global.location.href)}`}
      >
        {intl.formatMessage(genericMessages.registerSentenceCase)}
      </Button>
    </div>
  );
}

AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AnonymousUserMenu);
