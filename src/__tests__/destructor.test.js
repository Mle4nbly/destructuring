import displayAttacks from "../js/destructor.js";

test('Функция работает правильно', () => {
    const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]	
    };

    const result = [
        {
            id: 8, 
            name: 'Двойной выстрел', 
            icon: 'http://...', 
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9, 
            name: 'Нокаутирующий удар', 
            icon: 'http://...', 
            description: 'Описание недоступно'
        }
    ];

    expect(result).toEqual(displayAttacks(obj));
});