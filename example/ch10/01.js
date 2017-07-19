const u1 = {name: 'user1'};
const u2 = {name: 'user2'};
const u3 = {name: 'user3'};

const userRoles = new Map([
    [u1, 'ユーザー'],
    [u2, 'ユーザー'],
    [u3, '管理者'],
]);

console.log(userRoles.get(u1));
console.log(userRoles.get(u2));
console.log(userRoles.get(u3));

console.log('----');
for (let u of userRoles.keys()){
    console.log(u.name);
}
console.log('----');
for (let [u, r] of userRoles){
    console.log(`${u.name} : ${r}`);
}

console.log('----');
console.log([...userRoles.values()]);

console.log('----');
userRoles.clear();
console.log(userRoles.size);