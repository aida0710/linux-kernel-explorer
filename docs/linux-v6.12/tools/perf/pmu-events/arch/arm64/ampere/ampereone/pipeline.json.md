---
sidebar_position: 10
---
# pipeline.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/ampere/ampereone/pipeline.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "STALL_FRONTEND",
        "Errata": "Errata AC03_CPU_29",
        "BriefDescription": "Impacted by errata, use metrics instead -"
    },
    {
        "ArchStdEvent": "STALL_BACKEND"
    },
    {
        "ArchStdEvent": "STALL",
        "Errata": "Errata AC03_CPU_29",
        "BriefDescription": "Impacted by errata, use metrics instead -"
    },
    {
        "ArchStdEvent": "STALL_SLOT_BACKEND"
    },
    {
        "ArchStdEvent": "STALL_SLOT_FRONTEND",
        "Errata": "Errata AC03_CPU_29",
        "BriefDescription": "Impacted by errata, use metrics instead -"
    },
    {
        "ArchStdEvent": "STALL_SLOT"
    },
    {
        "ArchStdEvent": "STALL_BACKEND_MEM"
    }
]

```
