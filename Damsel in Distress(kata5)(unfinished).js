function solve(game) {
    let swimming, jumping = 0;
    let weJump = 0
    for (let i = 0; i < game.length; i) {
        switch (game[i]) {
            case 'j':
                jumping++
                i++

            case 'o':
                swimming++
                i++

            case 'p':
                return true

            case '.':
                i++

            case '~':
                let watercount = 1
                while (game[i + watercount] == '~' || game[i + watercount + weJump] == '#') {
                    if (game[i + watercount + weJump] == '#') {
                        weJump++;
                        watercount--
                    }
                    watercount++
                }
                if (weJump != 0) {
                    if (watercount + weJump > jumping + 1) {
                        return false
                    } else {
                        i += jumping + 1
                    }
                }
                if (watercount < swimming + 2) {
                    i += watercount
                } else {
                    if (watercount < jumping + 1) {
                        i += jumping + 1
                    } else {
                        if (watercount < jumping + 1 + swimming + 2) {
                            i += watercount
                        } else {
                            return false
                        }
                    }
                }

            case '#':
                let obscount = 1, splash = 0
                while (game[i + obscount] == '#') {
                    obscount++
                }
                if (obscount > jumping + 1) {
                    return false
                } else {
                    i += jumping + 1
                    if (game[i] == '~') {
                        splash++
                        while (game[i + splash] == '~') {
                            splash++
                        }
                        if (splash > swimming + 2) {
                            return false
                        } else {
                            i += splash
                        }
                    }
                }
        }

    }
    return false
}