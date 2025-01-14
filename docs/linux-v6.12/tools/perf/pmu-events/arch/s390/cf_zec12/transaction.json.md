---
sidebar_position: 4
---
# transaction.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/s390/cf_zec12/transaction.json`

### コンテンツ

```json
[
  {
    "BriefDescription": "Transaction count",
    "MetricName": "transaction",
    "MetricExpr": "TX_C_TEND + TX_NC_TEND + TX_NC_TABORT + TX_C_TABORT_SPECIAL + TX_C_TABORT_NO_SPECIAL"
  }
]

```
