---
sidebar_position: 5
---
# l1i_cache.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/neoverse-n1/l1i_cache.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "L1I_CACHE_REFILL",
        "PublicDescription": "Counts cache line refills in the level 1 instruction cache caused by a missed instruction fetch. Instruction fetches may include accessing multiple instructions, but the single cache line allocation is counted once."
    },
    {
        "ArchStdEvent": "L1I_CACHE",
        "PublicDescription": "Counts instruction fetches which access the level 1 instruction cache. Instruction cache accesses caused by cache maintenance operations are not counted."
    }
]

```
