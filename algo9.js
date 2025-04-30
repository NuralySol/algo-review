// Memoization: this is an optimization technique where you store the results of expensive function calls and return the cached result when the same input occurs again.

const memoizedAdd = () => {
    const cache = {};
    return function (n) {
        if (cache[n]) return cache[n];
        console.log('Calculating...');
        cache[n] = n + 10;
        return cache[n];
    }
}

const add = memoizedAdd();
console.log(add(5));
console.log(add(5));

// Currying & partial application: unary function transformation! seperate arguuments:
const multiply = a => b => a * b;
console.log(multiply(2)(3));
console.log(multiply(10)(10));
console.log(multiply(3)(-3));

//! Comprehensive example of the global Math() object!

const gameStats = (player) => {
    // 1. random dice roll for the player:
    const dice = Math.floor(Math.random() * 6) + 1;

    // 2. Random skill point between 50-100:
    const skillPoints = Math.floor(Math.random() * 51) + 50;

    // 3. Total power =  square of skill + dice roll influence:
    const totalPower = Math.pow(skillPoints, 2) + dice * 5;

    // 4. Normalize the power with square root + rounding:
    const normalized = Math.round(Math.sqrt(totalPower));

    // 5. Random attack angle (in degrees) and convert to radians:
    const attackAngleDeg = Math.floor(Math.random() * 360);
    const attackAngleRad = attackAngleDeg * (Math.PI / 180);

    // 6. Trigonomtric effect on attack (cosine factor):
    const attackModifier = Math.abs(Math.cos(attackAngleRad)).toFixed(3);

    // 7. Final score:
    const finalScore = Math.round(normalized * attackModifier);

    // 8. Bonus: calculate log base 10 of power (rating tier):
    const tier = Math.floor(Math.log10(totalPower));

    return {
        player,
        dice,
        skillPoints,
        totalPower,
        normalized,
        attackAngleDeg,
        attackAngleRad,
        attackModifier,
        finalScore,
        tier,
        verdict:
            tier >= 4 ? 'Legendary' :
                tier === 3 ? 'Epic' :
                    tier === 2 ? 'Rare' :
                        'Common'
    };
}

console.log(gameStats("Nuraly"))

