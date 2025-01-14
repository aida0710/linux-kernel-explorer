---
sidebar_position: 8
---
# memory.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/ampere/emag/memory.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "MEM_ACCESS_RD"
    },
    {
        "ArchStdEvent": "MEM_ACCESS_WR"
    },
    {
        "ArchStdEvent": "UNALIGNED_LD_SPEC"
    },
    {
        "ArchStdEvent": "UNALIGNED_ST_SPEC"
    },
    {
        "ArchStdEvent": "UNALIGNED_LDST_SPEC"
    },
    {
        "ArchStdEvent": "MEM_ACCESS"
    },
    {
        "PublicDescription": "This event counts any correctable or uncorrectable memory error (ECC or parity) in the protected core RAMs",
        "ArchStdEvent": "MEMORY_ERROR"
    }
]

```
