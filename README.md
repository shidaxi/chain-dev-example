# chain-dev-example

## Install foundry

## Deploy + Verify
deploy + verify contract:

```bash
cd foundry
export ETHERSCAN_API_KEY=a
forge create --legacy --rpc-url http://localhost:8545 --private-key 0x... src/MTK.sol:MTK --verifier-url https://localhost:4000/api --verify
```

deploy contract only:

```bash
cd foundry
forge create --legacy --rpc-url http://localhost:8545 --private-key 0x... src/MTK.sol:MTK
```

verify contract only:
```bash
cd foundry
export ETHERSCAN_API_KEY=a
export CONTRACT_ADDR=0x...
forge verify-contract ${CONTRACT_ADDR} src/MTK.sol:MTK --verifier-url https://localhost:4000/api
```
