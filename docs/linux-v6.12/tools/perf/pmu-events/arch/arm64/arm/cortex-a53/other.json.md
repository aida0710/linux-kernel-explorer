---
sidebar_position: 5
---
# other.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/cortex-a53/other.json`

### コンテンツ

```json
[
  {
        "ArchStdEvent": "EXC_IRQ"
  },
  {
        "ArchStdEvent": "EXC_FIQ"
  },
  {
        "EventCode": "0xC6",
        "EventName": "PRE_DECODE_ERR",
        "BriefDescription": "Pre-decode error"
  },
  {
        "EventCode": "0xD0",
        "EventName": "L1I_CACHE_ERR",
        "BriefDescription": "L1 Instruction Cache (data or tag) memory error"
  },
  {
        "EventCode": "0xD1",
        "EventName": "L1D_CACHE_ERR",
        "BriefDescription": "L1 Data Cache (data, tag or dirty) memory error, correctable or non-correctable"
  },
  {
        "EventCode": "0xD2",
        "EventName": "TLB_ERR",
        "BriefDescription": "TLB memory error"
  }
]

```
