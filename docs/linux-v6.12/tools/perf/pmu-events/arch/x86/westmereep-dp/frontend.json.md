---
sidebar_position: 4
---
# frontend.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/x86/westmereep-dp/frontend.json`

### コンテンツ

```json
[
    {
        "BriefDescription": "Instructions decoded",
        "Counter": "0,1,2,3",
        "EventCode": "0xD0",
        "EventName": "MACRO_INSTS.DECODED",
        "SampleAfterValue": "2000000",
        "UMask": "0x1"
    },
    {
        "BriefDescription": "Macro-fused instructions decoded",
        "Counter": "0,1,2,3",
        "EventCode": "0xA6",
        "EventName": "MACRO_INSTS.FUSIONS_DECODED",
        "SampleAfterValue": "2000000",
        "UMask": "0x1"
    },
    {
        "BriefDescription": "Two Uop instructions decoded",
        "Counter": "0,1,2,3",
        "EventCode": "0x19",
        "EventName": "TWO_UOP_INSTS_DECODED",
        "SampleAfterValue": "2000000",
        "UMask": "0x1"
    }
]

```
