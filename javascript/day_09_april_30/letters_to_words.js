const arr_i = ['b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
    ];
    word = ''
    out = []
    for(ch of arr_i){
        if (ch != '') {
            word += ch
        } else {
            out.push(word)
            word = ''
        }
    }
    out.push(word)
    console.log(out)