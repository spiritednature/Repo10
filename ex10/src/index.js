function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Maher Zain",
            title: "Thank You Allah",
            relase_year: 2021,
            id: 5,
            formats: {
                1: "DVD",
                2: "T8",
                3: "PL"
            }
        }
    };
    return myMusic;
}

myFunction()[2];

module.exports = myFunction;