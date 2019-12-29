const square = (x) => {
    console.log(x * x);
} 


const list = {
    someList: ['Konstantin', 'Danil'],
    yourName: 'long list',
    someAction() {
        console.log('Guests ' + this.someList[1]);

        this.someList.forEach((guest) => {
             console.log(guest + ' is unfuck ' + this.yourName);
        });
    }
}