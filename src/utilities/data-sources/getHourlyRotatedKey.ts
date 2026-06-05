const MS_PER_HOUR = 60 * 60 * 1000;

const getHourlyRotatedKey = (keys: string[]): string => {
    const hourIndex = Math.floor(Date.now() / MS_PER_HOUR);

    return keys[hourIndex % keys.length];
};

export default getHourlyRotatedKey;