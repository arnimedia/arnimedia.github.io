---
sidebar_position: 2
---

# Learn

Learn

## Network Overview
The Minima network consists of four distinct layers. Each layer contributes to Minima being a truly decentralized, peer-to-peer network for value and information exchange.

### Minima - Layer 1
Value transfer
On-chain

Minima is a censorship resistant value transfer layer. All transactions are processed by all nodes on the network. It is flood-fill. It uses a P2P system as its backbone for communication between nodes.

The Minima blockchain is where all on-chain transactions are processed. Every node in the network collectively comes to consensus on the state of the blockchain so all transactions are accounted for.
Users initiate their transacting relationships on Layer 1, prior to moving off-chain to use Layer 2 for faster and cheaper transactions. As the trust layer of the protocol, Layer 1 is also used for settling any disputes between users on Layer 2.

### Maxima
Information transfer
Off-chain

Maxima is the censorship resistant information transport layer running over the Minima network. Communication is point-to-point. Messages can be sent, off-chain, to chosen connected peers.

Maxima is an information transport layer, enabling encrypted, peer-to-peer exchange of information between 1st and 2nd degree connections on the Minima network.
Maxima can be used to build censorship resistant messaging applications over the Minima network and will be used for sending messages for Layer 2 communication.

### Layer 2 Architecture
Value transfer 
Off-chain

Layer 2 is fast, cheap and scalable. It enables instant peer-to-peer payments by creating bi-directional payment channels between participants, using technology similar to Bitcoin’s Lightning Network.
Minima can also support alternative scaling solutions such as state channels and side chains with the potential for further solutions in the future. 

Once users have set up their transacting relationship on Minima, they can perform all transactions off-chain, on Layer 2. This is where the bulk of peer-to-peer exchange between users of the network takes place. It is faster, as each payment is not settled on the blockchain and transactions are only processed by the relevant users rather than the entire network, as occurs on Layer 1.
Using multi-signature smart contracts and payment channels, users can keep a ‘tab’ of their unsettled balances indefinitely, until they wish to settle on Layer 1.
This unlocks the possibility of essentially unlimited transactions per second (TPS).

### MiniDapps
Web3 Applications

MiniDapps are truly decentralised applications built using the functionality enabled by all components of the Minima network:
1. Value transfer on Minima
2. Information transfer on Maxima
3. Unlimited transaction per seconds on Layer 2 solutions

MiniDapps are decentralized applications combining the utility provided by Minima, Maxima and Layer 2 with Minima’s scripting language. The front-end for MiniDapps can be written using the widely known JavaScript, HTML and CSS.
Minima’s KISS scripting language is Turing-Complete, allowing for powerful smart contract driven applications. Building a MiniDapp is accessible to any web developer.

## Core Concepts

### UTxO Model
Minima uses the UTxO (Unspent Transaction Output) Model, like Bitcoin. A Transaction Output is a specific amount of Minima, identifiable through a unique ID called a coin ID. Each Transaction Output can be considered analogous to a physical coin in that they can represent different amounts of currency and must be spent in whole. 

The Minima blockchain keeps track of the UTxO set on the network and who can spend them. The UTxO set circulating in the network fluctuates as users spend coins and create new ones as outputs from transactions. The sum of the value of all the UTxOs in the network will equal at most 1 billion Minima.

One or more UTxOs are used as inputs into transactions and one or more new UTxOs will be created as outputs.

The example below shows a transaction of 30 Minima from Bob to Alice. A UTxO worth 50 Minima is used as an input and two new UTxOs are created as outputs - one worth 30 Minima which is sent to the recipient and one of 20 Minima which is returned to the sender as change. Just like change is received when physical coins are spent.

### MMR (Merkle Mountain Range) Database 
As the tree is constantly pruned, users must keep track of their spent and unspent TxOs (transaction outputs)independently of the chain. Each TxO has a proof that forms part of a hash sum tree and these are stored in the user’s MMR database. 
When a user wishes to spend their coins, they must provide the up to date valid proofs that it is unspent.
Transaction Proof-of-Work (TxPoW)
Another core concept in Minima is TxPoW - Transaction Proof of Work. Minima requires users to provide work, in the form of computing power, to ‘mine’ their own transactions. Once a user has contributed a small amount of work (~10 seconds) their transaction will be propagated around the network. This is in contrast to Bitcoin where users rely on miners with specific hardware to provide PoW and propagate their transactions on their behalf.
Transactions are held in TxPoW units, which may or may not become blocks. TxPoW units contain a user’s transaction and the hashes of other unconfirmed transactions known to the user’s node. TxPoW units become blocks if they, by chance, meet the level of difficulty required to become a block. 
The Burn
The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. This cost, denominated in Minima, is ‘burned’ i.e. removed from Minima's hard-capped supply, making Minima a deflationary currency as the overall circulating supply slowly decreases over time. 

The burn serves multiple purposes:
A strong incentive to propagate and process a transaction: All users in the network will benefit from the decrease in supply as coins that are left become  more scarce and therefore more valuable.
A method for ordering transactions and regulating on-chain traffic: Similar to the fee model on other blockchains, the burn serves as a selection method for deciding which unconfirmed transactions will be added to a block. The higher the burn amount in a transaction, the more likely it is that a transaction will be added to a block. 
A mechanism for spam prevention by making Denial-of-Service (DoS) attacks expensive: The burn may be high during periods of heavy traffic or spam and, as it rises, traffic will decrease, self-regulating the system. The burn can be nil or very low when traffic is at manageable levels as the total amount is not important, only the relative burn amount in comparison to other transactions.
Transactions
Transaction Outputs & Inputs
Transaction Outputs
All transactions create new UTxOs (coins) as outputs, each coin is identifiable with a unique CoinID and consists of 
a specific amount of Minima and 
a script that determines the conditions required to spend the coin. This script is executed when a user attempts to spend the coin in a transaction and must return a value of TRUE to be spendable. See scripting
Each coin has the following attributes:
Coin Attribute
Description
CoinID
The globally unique identifier for a coin. 
The coin id of a new UTxO is
hash(first input coin in txn |  output_num_in_txn)
Amount
The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima (see coloured coins)
Address
The hash of a script. 
If no custom script is provided,the script will simply be RETURN(SIGNEDBY([PublicKey of coin owner]) i.e. the  transaction must be signed by the coin owner before it can be spent.
All addresses are P2SH (Pay to Script Hash).
TokenID
The token id. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima. 
Token
Token Details (see coloured coins)
Floating
True or False. Set when you create a transaction. If True, the coinid is ignored so that any valid coin that has the same amount, address and TokenID can be used.
Store State
True or False, depending on whether the state is stored for this coin
State
The state variables(0-255) of the transaction this coin was created in. You can access this data from scripts. 
MMR Entry
The MMR database entry number for this coin
Spent
True or False, depending on whether this coin has been spent or not.
Created
The block number this coin was created in.





Transaction Inputs
Transaction inputs identify which coins will be spent in the transaction, by providing the coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend. 
For example if a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin.
When using a wallet application, the wallet will automatically choose which coins to use as inputs, however when constructing transactions manually, relevant coins must be selected to ensure the sum of the inputs is greater than or equal to the sum of the outputs. 
Transaction Structure
A transaction is the main building block of the TxPoW unit. Transactions can be constructed in isolation but must be added into a TxPoW unit before it can be mined and propagated across the network.
has a list of inputs, outputs, state variables, linkhash and a transaction ID.

To send a transaction, a node must construct the transaction using one or more of their unspent coins as inputs. The outputs must also be specified, with the amount and the public address to send to. If the value of the input coins is greater than the value of the output, the change output must be defined as the difference to be returned to the sender, this is done automatically if the user uses a wallet application.
The burn must also be considered when constructing transactions, as this will affect the priority that a transaction has over others in the mempool. Any difference between inputs and outputs (including change) will be burned, removing that amount from circulation.

State Variables
Transactions also include State Variables for storing public data and previous transaction states to retrieve information for scripts. 0-255 variables are allowed.
Linkhash 
Used for a burn transaction. The linkhash of a burn transaction is the transaction ID of the main transaction it relates to. This means that the burn transaction can only be spent with the transaction it is linked to.  For normal transactions, it is set to 0x00.
Diagram: Main transaction  structure
Transaction ID: Hash(Transaction object)
Inputs
Outputs
State Variables (0-255)
Linkhash (0x00)


Diagram: Burn transaction structure
Transaction ID: Hash(Transaction object)
Inputs (matching the main txn)
Output (amount to burn)
State Variables (matching the main txn)
Linkhash (main txn ID)


Transaction Validity

For a transaction to be valid, it must:
It must have at least one, and up to 256 coin inputs
It must have no more than 255 outputs 
All inputs and outputs must be valid Minima amounts 
The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID.
Have unique coin IDs for each input coin




MMR Database
As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system.

Users do not store the whole MMR for all the coins in the system, as this would be too burdensome, rather they only store the paths to their own coins which must be provided when a user wishes to spend their coins.

The tree is append-only and is updated with each new block as coins are spent and created. When a coin is spent, the Spent state of the coin changes from false to true and the MMR Proof for the coin is updated.
When a new coin is created (as an output to a transaction), a new leaf node is added to the tree for the new, unspent coin, creating new peaks and a new root hash.
Therefore, for a user to prove the validity of their coins (i.e. that they are unspent), a user must remain up to date with the chain to ensure they hold the most up to date coin proofs.
When a user wishes to spend their coins, they must prove their coins are unspent by providing:
The MMR Root hash from the most recent block
The proof path to the entry of the coin 
A node receiving the proofs will check the coins are valid by summing the hashes provided and ensuring it matches the Merkle root they possess themselves.
Diagram: A complete Merkle Mountain Range (MMR) with three peaks and root

A brief overview: https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md
Detailed overview: https://petertodd.org/2016/delayed-txo-commitments


TxPoW Units (Blocks)
Before a transaction can be posted to the network, it must be added to a TxPoW unit with other essential data and ‘mined’.
During the TxPoW creation process, in addition to the main transaction, unconfirmed transactions in the mempool will also be added to the body of the TxPoW unit, serving to further propagate mempool transactions to known peers.
After being mined, a TxPoW unit will be propagated to the network either as a block if it meets the network block difficulty level, or as a basic TxPoW unit which serves only to propagate known unconfirmed transactions. This ensures block creation is a ‘chance’ encounter.
A node can carry out several activities with a TxPoW unit depending on the situation:
Generate: When a user wishes to send a transaction, or is required to send a Pulse to the network, their node will generate (construct) a TxPoW unit containing their transaction and the hashes of other unconfirmed transactions it knows about in the mempool. TxPoW units are analogous to compact blocks in Bitcoin. See TxPoW Generation
Mine: Before a node can propagate its TxPoW unit to the network, it must mine the TxPoW unit by cycling through different nonces (numbers), adding the nonce to the TxPoW header and hashing the result. Once the resulting hash meets the level of difficulty required by the network (~10 seconds work), they can propagate their TxPoW unit to other nodes in the network. 
	Note: The transaction difficulty sets the minimum amount of work a node must provide before their TxPoW can be propagated across the network (~10 seconds work). This ensures the network has received the transactions in their TxPoW unit, however this does not automatically mean that their transactions are in a block. 
TxPoW units only become blocks if, by chance, the block difficulty is met in the process of meeting the transaction difficulty. 
Check: When a node receives a TxPoW unit from another node on the network, it must check it to ensure its validity before processing and forwarding it on to its peers.
Process: When the node has checked that a TxPoW unit is valid, it will process it, adding to the chain if it meets the required difficulty level to become a block.

Diagram: The structure of a TxPoW Unit
TxPoW ID
 Header
Nonce (nonce)
TimeMilli (timemilli)
Block Number (block)
Block Difficulty (blkdiff)
Cascade Levels (cascadelevels)
Parent Blocks  (superparents)
MMR Root (mmr)
MMR Total (total)
Magic (magic)
Body Hash (txbodyhash)

Body
Random Number (prng)
Txn Difficulty (txndiff)
A Transaction (txn)
A Witness (witness)
Burn Txn (burntxn)
Burn Witness (burnwitness)
Txn List (txnlist)



Header

Header Field
Description
Nonce
The final nonce (number) that was included in the TxPoW header so that, when hashed, the required difficulty was achieved.
TimeMilli
Time this TxPoW was created in milliseconds since the epoch of 1970-01-01T00:00:00Z
Block Number
Block height to be used if this TxPoW unit becomes a block
Block Difficulty
The Difficulty required for this unit to be considered a valid block
Cascade Levels
The maximum number of levels in the Cascade (32)
Super Parents
Pointer to its immediate previous block and to the most recent block at each Super level. Used for cascading.
MMR Root
The root hash of the MMR (to prove coins existed using a proof and header)
MMR Total
The sum of all coins in the system (using a hash sum tree, the total amount of Minima is known every block removing the possibility of inflation bugs)
Magic
Chain parameters - the magic numbers: desiredmaxtxpow, desiredmaxtxn, desiredmintxpowwork, maxtxpow,maxtxn,mintxpowwork
TxBodyHash
 The hash of the TxPoW body



Body

Body Field
Description
Random Number
A Random number so that everyone is working on a different TxPoW in the pulse 
Txn Difficulty
The Difficulty required for this unit to be a valid TxPoW unit. The value that all users try to achieve when cycling through nonce values.
A Transaction
Transaction ID for the main transaction. 
UTxO (coin) inputs, outputs, state variables, linkhash and 
A Witness
Signature Proofs, MMR Proofs (pointing to a valid unspent MMR entry in the past 24 hours for each input coin used in the txn), Script Proofs (for the various P2SH addresses used)
Burn Txn
Inputs, outputs, state variables, linkhash and transaction ID for the Burn transaction paying for the transaction the user is trying to send. Can be empty.
Burn Witness
The Witness data for the Burn. Signatures, MMR Proofs and scripts. Can be empty.
Txn List
List of the hashes of mempool transactions to propagate. These will become confirmed if this TxPoW unit becomes a block. Only the hash of transactions are added since transactions have already been sent across the network.


The Blockchain
Overview
The Minima blockchain is structured to be compact and ‘lightweight’, it is therefore heavily pruned to meet this requirement. The chain itself is a tree of TxPoW blocks which hold transactions. 
As the TxPow tree is pruned periodically, the headers from the ‘heaviest’ blocks (blocks with the highest difficulty by chance) are added into a ‘Cascading’ chain. The root of the TxPow tree always remains connected to the tip of the Cascading chain.

The TxPoW tree is the main blockchain, a chain of the most recent TxPoW units that met the difficulty required to become a block. 
The Cascading chain is an unbroken chain of the headers of so called ‘super blocks’, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis.

TxPoW Tree
The TxPoW tree is the main blockchain and has a root - the start of the chain, tip - end of the chain, blocks (nodes) and length (number of blocks).
The root of the chain meets the tip of the Cascade.

If a TxPoW unit becomes a block, it will have a static base weight equal to its difficulty and a total weight equal to its base weight plus the sum of the weights of its children. 

Base weight = Difficulty (i.e. number of hashes it took to mine the block)
Total weight = Base weight + Sum(Base weight of all children) 

By default, all blocks in the chain are Level 0 blocks.

Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on.

All blocks in the tree are stored in a fast link hash table which provides a quick method of searching for blocks and determining how many blocks are in the tree, where for each block:
Key (K) - TxPoW ID 
Value (V) - TxPoW object

The Cascading Chain

Cascading Chain


Ghost algorithm 
The GHOST (Greedy Heaviest Observed SubTree) protocol is used by Minima nodes to come to consensus on which chain is the valid one when multiple branches are established. Branching occurs naturally when two blocks with the same number (block height) are found simultaneously. 
Rather than using the simple ‘Longest chain’ rule, where the valid chain is considered to be the one with the most number of blocks in it, GHOST considers the ‘heaviest’ chain to be the valid one. The ‘heaviest’ chain is the branch which has had the most Proof-of-Work put into it.
The faster the block time, the more likely it is that two blocks of the same number (height) will be found. If a simple ‘Longest chain’ rule applies, fast block times can reduce the security of the network if an attacker is able to secretly build a longer chain.
GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper Secure High-Rate Transaction Processing in Bitcoin. 
Diagram illustrating the the main chain according to GHOST:

Quantum Security
If Minima is truly expected to stand the test of time, it must be Quantum secure from the beginning. Once scaled to millions of nodes, each being complete - constructing and validating - nodes, the consensus critical components of the protocol must be finished, requiring no future changes.
Minima’s approach to Quantum security is two-fold:
Hashing
Minima uses the Keccak hash algorithm with a hash strength of 256, considered to be post-quantum sufficient by the National Institute of Standards and Technology (NIST) see: https://csrc.nist.gov/csrc/media/projects/hash-functions/documents/keccak-slides-at-nist.pdf
Keccak is used for TxPoW mining, block and transaction hashes, proof chains, and signing or verifying data. All of the cryptographic security of Minima is provided by hash functions.
Signatures
Minima uses Winternitz One Time Signature (WOTS) with a Winternitz parameter of 8. WOTS is a hash based digital signature scheme which is considered quantum resistant.
https://eprint.iacr.org/2011/191.pdf
The cost of being Quantum secure is that signatures are at least 10-20x as big as Elliptic Curve Digital Signature Algorithm (ECDSA) used in Bitcoin. A one time use WOTS is 400-800 bytes. Minima signatures are certainly large when compared to normal Bitcoin transactions, but they are not kept forever since almost all data is eventually pruned, so although a bandwidth issue, they are only a temporary storage overhead

Coloured coins
Minima is the native coin for the Minima blockchain. Each UTxO is defined as a coin and therefore a coin can be worth any amount of Minima. 
Minima supports custom tokens (including NFTs) natively. Tokens are Coloured coins. Coloured coins are tiny fractions of Minima which represent the supply of a custom token or NFT.
Custom tokens are specified by the following characteristics:
TokenID
Created after all the details are set, by hashing the coinid and total amount. Each TokenID is globally unique
Token Name/
Description
A String description that can be just a name or a full JSON.
CoinID
The CoinID used when creating the token initially 
Total
The total number of these tokens
Decimals
The number of decimal places to use for the token
Script
The token script 
Total Amount
The total amount of Minima coloured to be this token. Since Minima uses 44 decimal places, if you colour 1E-33 (0.000000000000000000000000000000001) Minima, that is 1000 tokens with 8 decimal places. i.e. 0.000000000000000000000000000000001000.00000000
Scale
The scale of the Token vs the amount. In the example above, the scale is 36


NFTs are simply custom tokens with no decimal places i.e. they can only be spent whole.
Smart Contracts
Minima has its own,Turing Complete, scripting language for creating Smart Contracts. 
Minima, like Bitcoin, uses the UTxO model so writing smart contracts on Minima is quite different to writing them on an Account based model like Ethereum. 
A Minima script (contract) returns TRUE or FALSE. The default is return FALSE, so all scripts must explicitly RETURN TRUE for the transaction to be valid.
A script can run for 512 instructions. An instruction is 1 operation or function.
The process to create a basic Smart Contract is as follows:
Write a script that will return TRUE when the funds should be spendable
Create the script, determining the address of the script. The address is the hash of the script. 
Send funds to the script address and set the state variables, this will lock the funds in a coin.
Add the coin as an input to a transaction. A transaction in Minima is a set of input coins, a set of output coins and a state variable list from 0-255. Each ‘coin’ has an amount, address (script hash), tokenid and coinid. 
The transaction will only be valid when the script in the input coin returns TRUE, at which point the amount in the coin can be spent - in full.
A ‘contract’ is the script that locks the funds in a coin and is interchangeable with the word script.
A transaction can be signed by 1 or more public keys - and Signatures can even be added as state variables if you want oracle style contracts. Minima script is case sensitive.
The addition of the state variables in the MMR Proof DB, allow for complex scripts with knowledge of their past to be created. A simple state mechanic for transactional history rather than a global state for ALL transactions.
Each user tracks the coins to an address they possess and all coins that have a public key or address they possess in the STATE or PREVSTATE.
Minima transactions are scriptable Logic Gates, with analogue inputs and outputs, a simple yet powerful control language, and a previous history state mechanic.
Contracts are inherently compatible with Layer 2. 
The scripting language supports SHA2-256 to allow cross-chain hash lock contracts with legacy chains.
Types of Contracts possible:
Basic Signed 
Time Lock 
Multi-sig 
Complex multi-sig 
M of N multi-sig 
Hashed Time Lock (including cross-chain)
Exchange
FlashCash
MAST 
Example multi-sig contract: 
scripts action:newscript track:true script:"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA526 8A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B94 02)" 


Token Scripts
Each token has a separate script that must also return TRUE when attempting to spend a UTxO. For instance this could be 'make sure 1% is sent to this address, for a charity coin, 
RETURN VERIFYOUT(@INPUT CHARITY_ADDRESS @AMOUNT*0.01 @TOKENID) 

or a counter mechanism that checks a counter has been incremented:
RETURN STATE(99) EQ INC(PREVSTATE(99))

Both the address script and the Token script must return TRUE.
A token by default has RETURN TRUE as it's script. This token structure is added to any transaction wishing to use that token so every user can know how many, what scripts, name etc of the Token is correct and valid. 
