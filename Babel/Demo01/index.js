import obj from './testImport';

(() => {
    console.log(obj);
})();


async function a() {
    console.log('begin');
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    });
    console.log('done');
}

a();
