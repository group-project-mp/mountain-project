const routes = require('./functions');

let difficulty = [
    { key: '5.0', value: '5.0', text: '5.0' },
    { key: '5.1', value: '5.1', text: '5.1' },
    { key: '5.2', value: '5.2', text: '5.2' },
    { key: '5.3', value: '5.3', text: '5.3' },
    { key: '5.4', value: '5.4', text: '5.4' },
    { key: '5.5', value: '5.5', text: '5.5' },
    { key: '5.6', value: '5.6', text: '5.6' },
    { key: '5.7', value: '5.7', text: '5.7' },
    { key: '5.7+', value: '5.7+', text: '5.7+' },
    { key: '5.8-', value: '5.8-', text: '5.8-' },
    { key: '5.8', value: '5.8', text: '5.8' },
    { key: '5.8+', value: '5.8+', text: '5.8+' },
    { key: '5.9-', value: '5.9-', text: '5.9-' },
    { key: '5.9', value: '5.9', text: '5.9' },
    { key: '5.9+', value: '5.9+', text: '5.9+' },
    { key: '5.10a', value: '5.10a', text: '5.10a' },
    { key: '5.10-', value: '5.10-', text: '5.10-' },
    { key: '5.10a/b', value: '5.10a/b', text: '5.10a/b' },
    { key: '5.10b', value: '5.10b', text: '5.10b' },
    { key: '5.10', value: '5.10', text: '5.10' },
    { key: '5.10b/c', value: '5.10b/c', text: '5.10b/c' },
    { key: '5.10c', value: '5.10c', text: '5.10c' },
    { key: '5.10+', value: '5.10+', text: '5.10+' },
    { key: '5.10c/d', value: '5.10c/d', text: '5.10c/d' },
    { key: '5.10d', value: '5.10d', text: '5.10d' },
    { key: '5.11a', value: '5.11a', text: '5.11a' },
    { key: '5.11-', value: '5.11-', text: '5.11-' },
    { key: '5.11a/b', value: '5.11a/b', text: '5.11a/b' },
    { key: '5.11b', value: '5.11b', text: '5.11b' },
    { key: '5.11', value: '5.11', text: '5.11' },
    { key: '5.11b/c', value: '5.11b/c', text: '5.11b/c' },
    { key: '5.11c', value: '5.11c', text: '5.11c' },
    { key: '5.11+', value: '5.11+', text: '5.11+' },
    { key: '5.11c/d', value: '5.11c/d', text: '5.11c/d' },
    { key: '5.11d', value: '5.11d', text: '5.11d' },
    { key: '5.12a', value: '5.12a', text: '5.12a' },
    { key: '5.12-', value: '5.12-', text: '5.12-' },
    { key: '5.12a/b', value: '5.12a/b', text: '5.12a/b' },
    { key: '5.12b', value: '5.12b', text: '5.12b' },
    { key: '5.12', value: '5.12', text: '5.12' },
    { key: '5.12b/c', value: '5.12b/c', text: '5.12b/c' },
    { key: '5.12c', value: '5.12c', text: '5.12c' },
    { key: '5.12+', value: '5.12+', text: '5.12+' },
    { key: '5.12c/d', value: '5.12c/d', text: '5.12c/d' },
    { key: '5.12d', value: '5.12d', text: '5.12d' },
    { key: '5.13a', value: '5.13a', text: '5.13a' },
    { key: '5.13-', value: '5.13-', text: '5.13-' },
    { key: '5.13a/b', value: '5.13a/b', text: '5.13a/b' },
    { key: '5.13b', value: '5.13b', text: '5.13b' },
    { key: '5.13', value: '5.13', text: '5.13' },
    { key: '5.13b/c', value: '5.13b/c', text: '5.13b/c' },
    { key: '5.13c', value: '5.13c', text: '5.13c' },
    { key: '5.13+', value: '5.13+', text: '5.13+' },
    { key: '5.13c/d', value: '5.13c/d', text: '5.13c/d' },
    { key: '5.13d', value: '5.13d', text: '5.13d' },
    { key: '5.14a', value: '5.14a', text: '5.14a' },
    { key: '5.14-', value: '5.14-', text: '5.14-' },
    { key: '5.14a/b', value: '5.14a/b', text: '5.14a/b' },
    { key: '5.14b', value: '5.14b', text: '5.14b' },
    { key: '5.14', value: '5.14', text: '5.14' },
    { key: '5.14b/c', value: '5.14b/c', text: '5.14b/c' },
    { key: '5.14c', value: '5.14c', text: '5.14c' },
    { key: '5.14+', value: '5.14+', text: '5.14+' },
    { key: '5.14c/d', value: '5.14c/d', text: '5.14c/d' },
    { key: '5.14d', value: '5.14d', text: '5.14d' },
    { key: '5.15a', value: '5.15a', text: '5.15a' },
    { key: '5.15-', value: '5.15-', text: '5.15-' },
    { key: '5.15a/b', value: '5.15a/b', text: '5.15a/b' },
    { key: '5.15b', value: '5.15b', text: '5.15b' },
    { key: '5.15', value: '5.15', text: '5.15' },
    { key: '5.15b/c', value: '5.15b/c', text: '5.15b/c' },
    { key: '5.15c', value: '5.15c', text: '5.15c' },
    { key: '5.15+', value: '5.15+', text: '5.15+' },
    { key: '5.15c/d', value: '5.15c/d', text: '5.15c/d' },
    { key: '5.15d', value: '5.15d', text: '5.15d' },
]
let boulder = [
    { key: 'V-easy', value: 'V-easy', text: 'V-easy' },
    { key: 'V0-', value: 'V0-', text: 'V0-' },
    { key: 'V0', value: 'V0', text: 'V0' },
    { key: 'V0+', value: 'V0+', text: 'V0+' },
    { key: 'V0-1', value: 'V0-1', text: 'V0-1' },
    { key: 'V1-', value: 'V1-', text: 'V1-' },
    { key: 'V1', value: 'V1', text: 'V1' },
    { key: 'V1+', value: 'V1+', text: 'V1+' },
    { key: 'V1-2', value: 'V1-2', text: 'V1-2' },
    { key: 'V2-', value: 'V2-', text: 'V2-' },
    { key: 'V2', value: 'V2', text: 'V2' },
    { key: 'V2+', value: 'V2+', text: 'V2+' },
    { key: 'V2-3', value: 'V2-3', text: 'V2-3' },
    { key: 'V3-', value: 'V3-', text: 'V3-' },
    { key: 'V3', value: 'V3', text: 'V3' },
    { key: 'V3+', value: 'V3+', text: 'V3+' },
    { key: 'V3-4', value: 'V3-4', text: 'V3-4' },
    { key: 'V4-', value: 'V4-', text: 'V4-' },
    { key: 'V4', value: 'V4', text: 'V4' },
    { key: 'V4+', value: 'V4+', text: 'V4+' },
    { key: 'V4-5', value: 'V4-5', text: 'V4-5' },
    { key: 'V5-', value: 'V5-', text: 'V5-' },
    { key: 'V5', value: 'V5', text: 'V5' },
    { key: 'V5+', value: 'V5+', text: 'V5+' },
    { key: 'V5-6', value: 'V5-6', text: 'V5-6' },
    { key: 'V6-', value: 'V6-', text: 'V6-' },
    { key: 'V6', value: 'V6', text: 'V6' },
    { key: 'V6+', value: 'V6+', text: 'V6+' },
    { key: 'V6-7', value: 'V6-7', text: 'V6-7' },
    { key: 'V7-', value: 'V7-', text: 'V7-' },
    { key: 'V7', value: 'V7', text: 'V7' },
    { key: 'V7+', value: 'V7+', text: 'V7+' },
    { key: 'V7-8', value: 'V7-8', text: 'V7-8' },
    { key: 'V8-', value: 'V8-', text: 'V8-' },
    { key: 'V8', value: 'V8', text: 'V8' },
    { key: 'V8+', value: 'V8+', text: 'V8+' },
    { key: 'V8-9', value: 'V8-9', text: 'V8-9' },
    { key: 'V9-', value: 'V9-', text: 'V9-' },
    { key: 'V9', value: 'V9', text: 'V9' },
    { key: 'V9+', value: 'V9+', text: 'V9+' },
    { key: 'V9-10', value: 'V9-10', text: 'V9-10' },
    { key: 'V10-', value: 'V10-', text: 'V10-' },
    { key: 'V10', value: 'V10', text: 'V10' },
    { key: 'V10+', value: 'V10+', text: 'V10+' },
    { key: 'V10-11', value: 'V10-11', text: 'V10-11' },
    { key: 'V11-', value: 'V11-', text: 'V11-' },
    { key: 'V11', value: 'V11', text: 'V11' },
    { key: 'V11+', value: 'V11+', text: 'V11+' },
    { key: 'V11-12', value: 'V11-12', text: 'V11-12' },
    { key: 'V12-', value: 'V12-', text: 'V12-' },
    { key: 'V12', value: 'V12', text: 'V12' },
    { key: 'V12+', value: 'V12+', text: 'V12+' },
    { key: 'V12-13', value: 'V12-13', text: 'V12-13' },
    { key: 'V13-', value: 'V13-', text: 'V13-' },
    { key: 'V13', value: 'V13', text: 'V13' },
    { key: 'V13+', value: 'V13+', text: 'V13+' },
    { key: 'V13-14', value: 'V13-14', text: 'V13-14' },
    { key: 'V14-', value: 'V14-', text: 'V14-' },
    { key: 'V14', value: 'V14', text: 'V14' },
    { key: 'V14+', value: 'V14+', text: 'V14+' },
    { key: 'V14-15', value: 'V14-15', text: 'V14-15' },
    { key: 'V15-', value: 'V15-', text: 'V15-' },
    { key: 'V15', value: 'V15', text: 'V15' },
    { key: 'V15+', value: 'V15+', text: 'V15+' },
    { key: 'V15-16', value: 'V15-16', text: 'V15-16' },
    { key: 'V16-', value: 'V16-', text: 'V16-' },
    { key: 'V16', value: 'V16', text: 'V16' },
    { key: 'V16+', value: 'V16+', text: 'V16+' },
    { key: 'V16-17', value: 'V16-17', text: 'V16-17' },
    { key: 'V17-', value: 'V17-', text: 'V17-' },
    { key: 'V17', value: 'V17', text: 'V17' }
]


describe('Type Selections', () => {
    test('Checking boulder selections', () => {
        expect(boulder.length).toEqual(71);
    });
    test('Type of boulder selection', () => {
        expect(Array.isArray(boulder)).toEqual(true);
    })
    test('Checking Sport/Trad selections', () => {
        expect(difficulty.length).toEqual(75);
    });
    test('Checking diffulty type', () => {
        expect(Array.isArray(difficulty)).toEqual(true);
    })
})

describe('Testing sales coming back', () => {
    test('checking data type to be an array', () => {
        let promise = routes.get20();
        promise.then(result => {
            expect(typeof result).toBe('array');
        })
    })
    test('checking data type to be an array', () => {
        let promise = routes.get20();
        promise.then(result => {
            expect(result.length).toEqual(20);
        })
    })
})

describe('Getting specific route', () => {
    test('Get request for route 4303', () => {
        let promise = routes.routeDetail(4303);
        promise.then(route => {
            expect(result.length).toEqual(1);
            expect(route.id).toBe(4303);
        })
    })
    test('Get request for route 4303', () => {
        let promise = routes.routeDetail(4303);
        promise.then(route => {
            expect(route.id).toBe(4303);
        })
    })
})
