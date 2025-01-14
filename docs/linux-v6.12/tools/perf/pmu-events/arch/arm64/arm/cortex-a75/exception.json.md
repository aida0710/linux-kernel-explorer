---
sidebar_position: 5
---
# exception.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/cortex-a75/exception.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "EXC_TAKEN"
    },
    {
        "ArchStdEvent": "EXC_UNDEF"
    },
    {
        "ArchStdEvent": "EXC_HVC"
    },
    {
        "PublicDescription": "Number of traps to hypervisor. This event counts the number of exception traps taken to EL2, excluding HVC instructions. This event is set every time that an exception is executed because of a decoded trap to the hypervisor. CCFAIL exceptions and traps caused by HVC instructions are excluded. This event is not counted when it is accessible from Non-secure EL0 or EL1",
        "EventCode": "0xDC",
        "EventName": "EXC_TRAP_HYP",
        "BriefDescription": "Number of traps to hypervisor. This event counts the number of exception traps taken to EL2, excluding HVC instructions. This event is set every time that an exception is executed because of a decoded trap to the hypervisor. CCFAIL exceptions and traps caused by HVC instructions are excluded. This event is not counted when it is accessible from Non-secure EL0 or EL1"
    }
]

```
