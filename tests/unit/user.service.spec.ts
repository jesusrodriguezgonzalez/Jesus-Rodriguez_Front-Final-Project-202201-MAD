import axios from 'axios';
import * as apiUser from '../../src/_services/user.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios');

describe('Testing updateUSer', () => {
  beforeEach(() => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    mockedAxios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    return apiUser.updateUser(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing Login', () => {
  beforeEach(() => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    mockedAxios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    return apiUser.login(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
describe('Testing LoginWithToken', () => {
  beforeEach(() => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    mockedAxios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    return apiUser.loginWithToken(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getUserById', () => {
  beforeEach(() => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    mockedAxios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    return apiUser.getUserById(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing Register', () => {
  beforeEach(() => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    mockedAxios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        name: 'jesus',
        surname: 'rodriguez',
        age: 22,
      },
    ];
    return apiUser.register(resp as any).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
