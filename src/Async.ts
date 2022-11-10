/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise<number>((resolve) => {
        setTimeout(() => {}, ms);
        resolve(ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export async function getData(): Promise<number[]> {
    const result: number[] = [];

    const [a, b, c] = await Promise.all([mock(100), mock(200), mock(300)]);
    result.push(a);
    result.push(b);
    result.push(c);
    return result;
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    return Promise.reject(new Error('my error')).catch(function (err) {
        return err.message;
    });
}
