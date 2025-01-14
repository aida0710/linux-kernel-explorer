---
sidebar_position: 8
---
# memory.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/cortex-a65-e1/memory.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "MEM_ACCESS"
    },
    {
        "ArchStdEvent": "REMOTE_ACCESS_RD"
    },
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
        "PublicDescription": "External memory request",
        "EventCode": "0xC1",
        "EventName": "BIU_EXT_MEM_REQ",
        "BriefDescription": "External memory request"
    },
    {
        "PublicDescription": "External memory request to non-cacheable memory",
        "EventCode": "0xC2",
        "EventName": "BIU_EXT_MEM_REQ_NC",
        "BriefDescription": "External memory request to non-cacheable memory"
    }
]

```
