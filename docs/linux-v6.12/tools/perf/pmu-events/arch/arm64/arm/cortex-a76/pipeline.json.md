---
sidebar_position: 7
---
# pipeline.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/cortex-a76/pipeline.json`

### コンテンツ

```json
[
    {
        "PublicDescription": "The counter counts on any cycle when there are no fetched instructions available to dispatch.",
        "ArchStdEvent": "STALL_FRONTEND"
    },
    {
        "PublicDescription": "The counter counts on any cycle fetched instructions are not dispatched due to resource constraints.",
        "ArchStdEvent": "STALL_BACKEND"
    }
]

```
