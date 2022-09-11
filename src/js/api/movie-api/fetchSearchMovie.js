import api from './api';
import { REQUEST_URL } from '../../constants';
import { homeConfigs } from '../../HomeConfigs';
import notifications from '../../notifications';
import storage from '../../local-storage/local-storage-service';
import key from '../../local-storage/local-storage-keys';

export const fetchSearchMovie = async () => {
  const config = {
    params: {
      query: homeConfigs.searchQuery,
      page: homeConfigs.page,
      include_adult: homeConfigs.includeAdult,
    },
  };

  const url = REQUEST_URL.SEARCH;

  try {
    const response = await api.get(url, config);
    storage.save(key.LAST_FETCH, 'SEARCH');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
