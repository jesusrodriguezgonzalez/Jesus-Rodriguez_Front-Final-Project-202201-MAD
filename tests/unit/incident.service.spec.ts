import axios from 'axios';
import * as helpers from '@/_utils/helper';
import * as apiIncident from '../../src/_services/incident.service';

jest.mock('@/_utils/helper');

const mockedHelper = jest.mocked(helpers, true);

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios');

describe('Testing updateIncident', () => {
  beforeEach(() => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    mockedAxios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    mockedHelper.getToken.mockReturnValue('1234');
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    return apiIncident.updateIncident(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing deleteApartment', () => {
  beforeEach(() => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    mockedAxios.delete.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    return apiIncident.deleteIncident(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getIncidentsByHome', () => {
  beforeEach(() => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    mockedAxios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    return apiIncident.getIncidentsByHome(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing newIncident', () => {
  beforeEach(() => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    mockedAxios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        title: 'New incident',
        status: 'Open',
        id_suer: 22,
      },
    ];
    return apiIncident.newIncident(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
