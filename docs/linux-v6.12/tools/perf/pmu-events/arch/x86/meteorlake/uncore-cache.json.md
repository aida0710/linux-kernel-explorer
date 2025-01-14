---
sidebar_position: 9
---
# uncore-cache.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/x86/meteorlake/uncore-cache.json`

### コンテンツ

```json
[
    {
        "BriefDescription": "Number of all entries allocated. Includes also retries.",
        "Counter": "0,1",
        "EventCode": "0x35",
        "EventName": "UNC_HAC_CBO_TOR_ALLOCATION.ALL",
        "PerPkg": "1",
        "UMask": "0x8",
        "Unit": "HAC_CBO"
    },
    {
        "BriefDescription": "Asserted on coherent DRD + DRdPref  allocations into the queue. Cacheable only",
        "Counter": "0,1",
        "EventCode": "0x35",
        "EventName": "UNC_HAC_CBO_TOR_ALLOCATION.DRD",
        "PerPkg": "1",
        "UMask": "0x1",
        "Unit": "HAC_CBO"
    }
]

```
