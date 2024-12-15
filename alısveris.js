const ürünAdet = prompt ("Kaç adet ürün eklemek istiyorsunuz");
const alisverisListe = [];

for (let index = 0; index < ürünAdet; index++) {

    const ürün = prompt(`${index + 1}. ürünü giriniz`);
    alisverisListe.push(ürün);

}
console.log(`Alışveriş Listeniz: ${alisverisListe}`);