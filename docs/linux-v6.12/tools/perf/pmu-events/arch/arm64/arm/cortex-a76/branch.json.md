---
sidebar_position: 1
---
# branch.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/cortex-a76/branch.json`

### コンテンツ

```json
[
    {
        "PublicDescription": "This event counts any predictable branch instruction which is mispredicted either due to dynamic misprediction or because the MMU is off and the branches are statically predicted not taken",
        "ArchStdEvent": "BR_MIS_PRED"
    },
    {
        "PublicDescription": "This event counts all predictable branches.",
        "ArchStdEvent": "BR_PRED"
    }
]

```
