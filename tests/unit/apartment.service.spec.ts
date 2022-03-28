import axios from 'axios';
import * as apiApartments from '../../src/_services/apartment.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios');

describe('Testing updateApartment', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.updateApartment(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing addTenant', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.addTenant(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing deleteApartment', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.delete.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.deleteApartment(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getApartment', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.getApartment(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getAllApartments', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.getAllApartments().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing newApartment', () => {
  beforeEach(() => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    mockedAxios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        direction: 'Calle Pruebas,22',
        cp: 18200,
        province: 'Granada',
      },
    ];
    return apiApartments.newApartment(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
