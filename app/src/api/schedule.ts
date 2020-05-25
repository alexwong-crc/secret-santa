import { IScheduleAPIRequest, IScheduleAPIResponse } from '@/types/api';
import axios, { AxiosResponse } from 'axios';
import { domain } from '@/api';
import { IFormikValues } from '@/types/form';

export const scheduleAPI = (request: IScheduleAPIRequest): Promise<IScheduleAPIResponse> =>
  axios.post(`${domain}/schedule`, request).then((res: AxiosResponse<IScheduleAPIResponse>) => {
    return res.data;
  });
