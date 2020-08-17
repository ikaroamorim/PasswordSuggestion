$(document).ready(() => {


    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    })


    copyPassword = () => {
        let psw = $('#password')

        psw[0].select()
        psw[0].setSelectionRange(0, 99999)

        document.execCommand("copy")
    }

    toggleCustom = () => {
        //Get the Custom checkbox
        let custom = $('#ctm-sett')
        if (custom[0].checked) {
            $('#settings-custom').first().removeClass("hide")
        } else {
            $('#settings-custom').first().addClass("hide")
        }
    }

    generatePassword = () => {

        //Get the Custom checkbox
        let custom = $('#ctm-sett')

        //Empty string to the result
        let result = ''

        //Options object
        let options = { upper: '', lower: '', number: '', special: '' }

        //Upper: 65 - 90
        //Lower: 97 - 122
        //Number: 48 - 57
        //Special: following String

        //Allowed special Characters 
        let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
        let specialLenght = specialChar.length

        //Get DOM options
        if (custom[0].checked) {
            let upperForm = $('#capital')
            let lowerForm = $('#lower')
            let numberForm = $('#number')
            let specialForm = $('#special')
            options.upper = parseInt(upperForm[0].value)
            options.lower = parseInt(lowerForm[0].value)
            options.number = parseInt(numberForm[0].value)
            options.special = parseInt(specialForm[0].value)
        } else {
            options.upper = 1
            options.lower = 3
            options.number = 4
            options.special = 2
        }

        //Creating the password
        for (let index = 0; index < options.upper; index++) {
            result += String.fromCharCode(65 + Math.floor((90 - 65 + 1) * Math.random()));
        }
        for (let index = 0; index < options.lower; index++) {
            result += String.fromCharCode(97 + Math.floor((122 - 97 + 1) * Math.random()));
        }
        for (let index = 0; index < options.number; index++) {
            result += String.fromCharCode(48 + Math.floor((57 - 48 + 1) * Math.random()));
        }
        for (let index = 0; index < options.special; index++) {
            result += specialChar.charAt(Math.floor(specialLenght * Math.random()))
        }

        //Changing span text
        let ansBox = $('#password').val(result)
    }
})