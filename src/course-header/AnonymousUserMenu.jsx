import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import genericMessages from '../generic/messages';
  
function AnonymousUserMenu({ intl }) {
  return (
    <div>
   <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#41416e;}</style></defs><title>eye</title><g id="eye-Filled"><path id="eye-Filled-2" data-name="eye-Filled" class="cls-1" d="M21.014,10.24c-1.29-2.14-4.17-5.74-9.02-5.74s-7.73,3.6-9.01,5.74a3.4,3.4,0,0,0,0,3.51c1.28,2.15,4.17,5.75,9.01,5.75s7.73-3.6,9.02-5.75A3.427,3.427,0,0,0,21.5,12,3.49,3.49,0,0,0,21.014,10.24Zm-9.02,6.26a4.5,4.5,0,1,1,4.5-4.5A4.507,4.507,0,0,1,11.994,16.5Zm2.49-4.64a.66.66,0,0,1,.01.14,2.5,2.5,0,1,1-.9-1.92,1.016,1.016,0,0,0-.6.92,1,1,0,0,0,1,1A.906.906,0,0,0,14.484,11.86Z"/></g></svg>
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
