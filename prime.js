while(true){
    let n = parseInt(prompt("Bilangan prima dari 2 ke n, n = ?"));
    if (n < 2){
        alert("n nya lebih dari atau sama dengan 2 woi!");
        continue;
    }
    if (n == 2){
        alert(`Bilangan prima sampai ${n} : 2`);
        continue;
    }

    const primeArr = [2, ];

    for (let i = 2; i < n; i++){
        for (let j = 2; j < i; j++){
            let isPrime = 0;
            if(i%j == 0){
                isPrime++;
            }
            if (isPrime > 0){
                break;
            }
            if (j == i-1 && isPrime == 0){
                primeArr.push(i);
            }
        }
    }

    alert(`Bilangan prima sampai ${n} : ${primeArr}`);
}