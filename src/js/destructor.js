export default function displayAttacks(obj) {
    const attacksList = obj.special;
    
    attacksList.forEach(attack => {
        if (attack.description == undefined) {
            attack.description = 'Описание недоступно';
        }
    });
    
    return attacksList;
};