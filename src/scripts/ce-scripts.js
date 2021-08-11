document.onreadystatechange = () => {    
    if(document.readyState === "interactive" || document.readyState === "complete"){

        // Add placeholder to the "other" giving amount field
        let enFieldOtherAmt = document.querySelectorAll('.en__field--donationAmt .en__field__item--other .en__field__input--other')[0];
        if(enFieldOtherAmt){
            enFieldOtherAmt.placeholder = "Other";
        }

    }
}