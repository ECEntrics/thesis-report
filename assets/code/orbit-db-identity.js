{
   id: '<the ID of the external identity>',
   // Auto-generated by OrbitDB
   publicKey: '<signing key used to sign OrbitDB entries>',
   signatures: {
     //Allows the owner of id to prove they own the private key associated with publicKey
     id: '<signature of id signed using publicKey>',
     //This links the two ids
     publicKey: '<signature of signatures.id + publicKey using id>'
   },
   type: 'orbitdb'
}
