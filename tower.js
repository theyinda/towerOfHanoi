// n = number of disks to be moved

// from_rod = rod where the disk is present;

// to_rod = rod where the disk is to be moved;

// aux_rod =  the remaining one in the middle (B);

// for 4 disks towerofHanoi(4,A,C,B)

function towerOfHanoi(n,from_rod,to_rod,aux_rod) {
    if (n === 1){
        console.log("Move disk n(i.e 1) from the from_rod to the to_rod")

    } else{
        towerOfHanoi(n - 1, from_rod, aux_rod,to_rod);
        console.log("Move disk n-1 from the from_rod to the to_rod");
        towerOfHanoi(n - 1, aux_rod, to_rod,from_rod);
    }
};
towerOfHanoi(3,'A','C','B');