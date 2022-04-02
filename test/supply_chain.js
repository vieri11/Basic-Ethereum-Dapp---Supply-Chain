var SupplyChain = artifacts.require('./supplyChain.sol');

  contract('SupplyChain', async accounts => {
    it("should create a Participant", async () => {

    let instance = await SupplyChain.deployed(); // Create instance of Supplychain
    let participantId = await instance.addParticipant("A","passA","0xb255163f45487210032CD425D0566442e9a4BFF7","Manufacturer"); // Create Manu
    let participant = await instance.participants(0); // get new participant from participants mapping

    assert.equal(participant[0], "A"); // check if participants[0] participant's name is equal to name 'A'
    assert.equal(participant[2], "Manufacturer");

    participantId = await instance.addParticipant("B","passB","0xa5426330db21Adb88A037c3B6B9A4ed2c7d4a2F1","Supplier");
    participant = await instance.participants(1);

    assert.equal(participant[0], "B");
    assert.equal(participant[2], "Supplier");

    participantId = await instance.addParticipant("C","passC","0xb4a55D26248BA0CDfCf11Df35db32E8f59168101","Consumer");
    participant = await instance.participants(2);

    assert.equal(participant[0], "C");
    assert.equal(participant[2], "Consumer");
  });

  it("should return Participant details", async () => {
    let instance = await SupplyChain.deployed();
    let participantDetails = await instance.getParticipant(0);

    assert.equal(participantDetails[0], "A");

    instance = await SupplyChain.deployed();
    participantDetails = await instance.getParticipant(1);
    assert.equal(participantDetails[0], "B");

    instance = await SupplyChain.deployed();
    participantDetails = await instance.getParticipant(2);
    assert.equal(participantDetails[0], "C");
  })

});
