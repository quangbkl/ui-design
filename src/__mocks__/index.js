import mock from './mock';

import './db/user-db';
import './db/booking-history-db';

mock.onAny().passThrough();
