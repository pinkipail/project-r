const validation = function (target) {
    
    let value = target.value,
        type = target.type

    switch (type) {
        case 'email':
            if (value.length >= 4 && value.length <= 12)
                return true
            else
                return false
            break

        case 'password':
            if (value.length >= 4 && value.length <= 12)
                return true
            else
                return false
                break
    }
}