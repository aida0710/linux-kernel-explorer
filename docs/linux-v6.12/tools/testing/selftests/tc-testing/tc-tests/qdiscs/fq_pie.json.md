---
sidebar_position: 11
---
# fq_pie.json

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/tc-testing/tc-tests/qdiscs/fq_pie.json`

### コンテンツ

```json
[
    {
        "id": "83be",
        "name": "Create FQ-PIE with invalid number of flows",
        "category": [
            "qdisc",
            "fq_pie"
        ],
        "plugins": {
            "requires": "nsPlugin"
        },
        "setup": [
        ],
        "cmdUnderTest": "$TC qdisc add dev $DUMMY handle 1: root fq_pie flows 65536",
        "expExitCode": "0",
        "verifyCmd": "$TC qdisc show dev $DUMMY",
        "matchPattern": "qdisc fq_pie 1: root refcnt 2 limit 10240p flows 65536",
        "matchCount": "1",
        "teardown": [
        ]
    }
]

```
