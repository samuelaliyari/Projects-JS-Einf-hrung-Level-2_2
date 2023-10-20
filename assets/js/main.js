

const rechnungsSumme = document.body.querySelector("#rechnung");
const personen = document.body.querySelector("#personenAnzahl");
const service = document.body.querySelector("#serviceQualität");
const trinkgeldContainer = document.body.querySelector(".resultContainer p:nth-of-type(1)");
const gesamtSumme = document.body.querySelector(".resultContainer p:nth-of-type(2)");
const anteil = document.body.querySelector(".resultContainer p:nth-of-type(3)");



function berechne() {
    event.preventDefault()
    let summe = Number(rechnungsSumme.value);
    let person = Number(personen.value);
    let quality = service.value;
    let trinkgeld

    if (quality === "perfect") {
        trinkgeld = summe * 0.2;
        trinkgeldContainer.textContent = `Das Trinkgeld ist: ${trinkgeld} €`
        gesamtSumme.textContent = `Die Gesamtsumme beträgt: ${summe + trinkgeld} €`
        anteil.textContent = `Der Preis pro Person ist ${(summe + trinkgeld) / person} €`
        console.log(trinkgeld)
    }
    if (quality === "gut") {
        trinkgeld = summe * 0.1;
        trinkgeldContainer.textContent = `Das Trinkgeld ist: ${trinkgeld} €`
        gesamtSumme.textContent = `Die Gesamtsumme beträgt: ${summe + trinkgeld} €`
        anteil.textContent = `Der Preis pro Person ist ${(summe + trinkgeld) / person} €`
        console.log(trinkgeld)
    }
    if (quality === "schlecht") {
        trinkgeld = summe * 0.02;
        trinkgeldContainer.textContent = `Das Trinkgeld ist: ${trinkgeld} €`
        gesamtSumme.textContent = `Die Gesamtsumme beträgt: ${summe + trinkgeld} €`
        anteil.textContent = `Der Preis pro Person ist ${(summe + trinkgeld) / person} €`
        console.log(trinkgeld)
    }
    console.log("perfetto");
}