import Enum from '../lib/enum';

const OrderStatus = {
  DECLINED: -1,
  CANCELED: 0,
  DRAFT: 1,
  PENDING: 2,
  COMPLETED: 3,

  properties: {
    [-1]: {
      key: 'declined',
      value: -1,
      color: 'red',
      name: 'Declined state',
      nestedKey: {
        order: 0,
      },
    },
    0: {
      key: 'canceled',
      value: 0,
      color: 'red',
      name: 'Canceled state',
      nestedKey: {
        order: 1,
      },
    },
    1: {
      key: 'draft',
      value: 1,
      color: 'blue',
      name: 'Draft state',
      nestedKey: {
        order: 2,
      },
    },
    2: {
      key: 'pending',
      value: 2,
      color: 'orange',
      name: 'Pending state',
      nestedKey: {
        order: 3,
      },
    },
    3: {
      key: 'completed',
      value: 2,
      color: 'green',
      name: 'Completed state',
      nestedKey: {
        order: 4,
      },
    },
  },
};

const statusEnum = new Enum(OrderStatus);

describe('enum', () => {
  it('should return the value', () => {
    expect(statusEnum.PENDING).toEqual(OrderStatus.PENDING);
  });

  it('should return true for has value', () => {
    expect(statusEnum.has('DECLINED')).toBeTruthy();
  });

  it('should return false for has not have value', () => {
    expect(statusEnum.has('XYZ')).toBeFalsy();
  });

  it('should return value', () => {
    expect(statusEnum.getValue('DRAFT')).toEqual(OrderStatus.DRAFT);
  });

  it('should return all values', () => {
    expect(statusEnum.all().length).toEqual(5);
  });

  it('should return all values without excluded', () => {
    expect(statusEnum.all(OrderStatus.DRAFT).length).toEqual(4);
  });

  it('should return property', () => {
    expect(statusEnum.getProperty(OrderStatus.CANCELED, 'color')).toEqual(
      'red',
    );
  });

  it('should return nested property', () => {
    expect(
      statusEnum.getProperty(OrderStatus.COMPLETED, 'nestedKey.order'),
    ).toEqual(4);
  });

  it('should return nested property by array', () => {
    expect(
      statusEnum.getProperty(OrderStatus.DECLINED, ['nestedKey', 'order']),
    ).toEqual(0);
  });

  it('should return fallback for not found nested property', () => {
    const fallback = 100;
    expect(
      statusEnum.getProperty(
        OrderStatus.DECLINED,
        ['nestedKey', 'order1'],
        fallback,
      ),
    ).toEqual(fallback);
  });

  it('should return fallback for not found property', () => {
    const fallback = 'pink';
    expect(
      statusEnum.getProperty(OrderStatus.CANCELED, 'color_', fallback),
    ).toEqual(fallback);
  });

  it('should return property by key', () => {
    expect(statusEnum.getPropertyByKey('CANCELED', 'color')).toEqual('red');
  });

  it('should return fallback property by key', () => {
    const fallback = 'pink';
    expect(statusEnum.getPropertyByKey('CANCELED', 'color_', fallback)).toEqual(
      fallback,
    );
  });

  it('should return iterator', () => {
    expect([...statusEnum]).toBeDefined();
  });
});
