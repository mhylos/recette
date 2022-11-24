class User {

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    /**
     * @param {string} gender
     */
    set gender(gender) {
        this.gender = gender;
    }

    /**
     * @param {string} birthday
     */
    set birthday(birthday) {
        this.day = parseInt(birthday.split('/')[0]);
        this.month = parseInt(birthday.split('/')[1]);
        this.year = parseInt(birthday.split('/')[2]);
    }

    /**
     * @param {int} phone
     */
    set phone(phone) {
        this.phone = phone
    }

    /**
     * @param {string} address
     */
    set address(address) {
        this.address = address.split('#')[0]
        this.numberHouse = address.split('#')[1]
    }

    /**
     * @param {string} payMethod
     */
    set payMethod(payMethod) {
        payMethod = payMethod.split(' ')
        try {
            payMethod.forEach(value => parseInt(value));
            this.numberCard = parseInt(payMethod[0])
            this.cvv = parseInt(payMethod[1])
            this.month_exp = parseInt(payMethod[2])
            this.year_exp = parseInt(payMethod[3])
        } catch (error) {
            console.log(error);
        }
    }

}
