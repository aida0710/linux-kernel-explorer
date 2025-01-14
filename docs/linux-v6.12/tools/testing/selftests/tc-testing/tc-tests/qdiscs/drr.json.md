---
sidebar_position: 5
---
# drr.json

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tc-testing/tc-tests/qdiscs/drr.json`

### コンテンツ

```json
[
    {
        "id": "0385",
        "name": "Create DRR with default setting",
        "category": [
            "qdisc",
            "drr"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
        ],
        "cmdUnderTest": "$TC qdisc add dev $DUMMY handle 1: root drr",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc drr 1: root refcnt [0-9]+",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 1: root"
        ]
    },
    {
        "id": "2375",
        "name": "Delete DRR with handle",
        "category": [
            "qdisc",
            "drr"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
            "$TC qdisc add dev $DUMMY handle 1: root drr"
        ],
        "cmdUnderTest": "$TC qdisc del dev $DUMMY handle 1: root",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc drr 1: root refcnt [0-9]+",
        "matchCount": "0",
        "teardown": [
        ]
    },
    {
        "id": "3092",
        "name": "Show DRR class",
        "category": [
            "qdisc",
            "drr"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
        ],
        "cmdUnderTest": "$TC qdisc add dev $DUMMY handle 1: root drr",
        "expExitCode": "0",
        "verifyCmd": "$TC class show dev $DUMMY",
        "matchPattern": "class drr 1:",
        "matchCount": "0",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 1: root"
        ]
    }
]

```
