let genNumber = contact => contact.number.replace(/\s|\(|\)|-|\+/g, '');

let genNames = contact => {
    let name = contact.name.replace(',', '').split(/\s/g);
    return {
        display: `${name[1]} ${name[0]}`,
        separated: `${name[0]};${name[1]}`
    }
};

let genVCF = contact => {
    return (
`BEGIN:VCARD
VERSION:3.0
N:${genNames(contact).separated}
FN:${genNames(contact).display}
TEL;TYPE=CELL:${genNumber(contact)}
END:VCARD`);
};