---
sidebar_position: 2
---
# filter.json

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tc-testing/tc-tests/infra/filter.json`

### コンテンツ

```json
[
    {
        "id": "c2b4",
        "name": "Soft lockup alarm will be not generated after delete the prio 0 filter of the chain",
        "category": [
            "filter",
            "chain"
        ],
	"plugins": {
		"requires": "nsPlugin"
	},
        "setup": [
            "$TC qdisc add dev $DUMMY root handle 1: htb default 1",
            "$TC chain add dev $DUMMY",
            "$TC filter del dev $DUMMY chain 0 parent 1: prio 0"
        ],
        "cmdUnderTest": "$TC filter add dev $DUMMY chain 0 parent 1:",
        "expExitCode": "2",
        "verifyCmd": "$TC chain ls dev $DUMMY",
        "matchPattern": "chain parent 1: chain 0",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY root handle 1: htb default 1"
        ]
    }
]

```
