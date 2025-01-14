---
sidebar_position: 21
---
# pfifo_fast.json

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tc-testing/tc-tests/qdiscs/pfifo_fast.json`

### コンテンツ

```json
[
    {
        "id": "900c",
        "name": "Create pfifo_fast with default setting",
        "category": [
            "qdisc",
            "pfifo_fast"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
        ],
        "cmdUnderTest": "$TC qdisc add dev $DUMMY handle 1: root pfifo_fast",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc pfifo_fast 1: root refcnt [0-9]+ bands 3 priomap",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 1: root"
        ]
    },
    {
        "id": "7470",
        "name": "Dump pfifo_fast stats",
        "category": [
            "qdisc",
            "pfifo_fast"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
        ],
        "cmdUnderTest": "$TC qdisc add dev $DUMMY handle 1: root pfifo_fast",
        "expExitCode": "0",
        "verifyCmd": "$TC -s qdisc show dev $DUMMY",
        "matchPattern": "Sent.*bytes.*pkt \\(dropped.*overlimits.*requeues .*\\)",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 1: root"
        ]
    },
    {
        "id": "b974",
        "name": "Replace pfifo_fast with different handle",
        "category": [
            "qdisc",
            "pfifo_fast"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
            "$TC qdisc add dev $DUMMY handle 1: root pfifo_fast"
        ],
        "cmdUnderTest": "$TC qdisc replace dev $DUMMY handle 2: root pfifo_fast",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc pfifo_fast 2: root refcnt [0-9]+ bands 3 priomap",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 2: root"
        ]
    },
    {
        "id": "3240",
        "name": "Delete pfifo_fast with valid handle",
        "category": [
            "qdisc",
            "pfifo_fast"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
            "$TC qdisc add dev $DUMMY handle 1: root pfifo_fast"
        ],
        "cmdUnderTest": "$TC qdisc del dev $DUMMY handle 1: root",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc pfifo_fast 1: root refcnt [0-9]+ bands 3 priomap",
        "matchCount": "0",
        "teardown": [
        ]
    },
    {
        "id": "4385",
        "name": "Delete pfifo_fast with invalid handle",
        "category": [
            "qdisc",
            "pfifo_fast"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
            "$TC qdisc add dev $DUMMY handle 1: root pfifo_fast"
        ],
        "cmdUnderTest": "$TC qdisc del dev $DUMMY handle 2: root",
        "expExitCode": "2",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc pfifo_fast 1: root refcnt [0-9]+ bands 3 priomap",
        "matchCount": "1",
        "teardown": [
            "$TC qdisc del dev $DUMMY handle 1: root"
        ]
    }
]

```
