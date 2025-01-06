function solution(strings, n) {
    for (let i = 0; i < strings.length - 1; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            let min = strings[i];
            let compare = strings[j];
            if (min[n] == compare[n]) {
                if (min > compare) {
                    strings[i] = compare;
                    strings[j] = min;
                }
            }
            else if (min[n] > compare[n]) {
                strings[i] = compare;
                strings[j] = min;
            }
            //console.log(min[n], compare[n], strings);
        }
    }
    //console.log(`최종: ${strings}`);
    return strings;
}