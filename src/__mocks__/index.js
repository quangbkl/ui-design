import mock from './mock';

import './db/user-db';
import './db/booking-history-db';
import './db/post-db';
import './db/promos-db'

mock.onAny().passThrough();
