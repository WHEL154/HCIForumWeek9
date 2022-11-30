const Cangiveblood = (donor, receive) => {
    if (donor[donor.length - 1] === '+' && receive[receive.length] === '-') return false;
    donor.toUpperCase();
    receive.toUpperCase();

    if (donor.includes('O')) return true;
    if (donor.includes('A') && receive.includes('A') && donor.length<=receive.length) return true;
    if (donor.includes('B') && receive.includes('B') && donor.length<=receive.length) return true;
    
    return false;
}

console.log(Cangiveblood("O+", "A+"));
console.log(Cangiveblood("A-", "B-"));
console.log(Cangiveblood("A-", "AB+"));


