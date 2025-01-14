---
sidebar_position: 13
---
# spe.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/neoverse-v1/spe.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "SAMPLE_POP",
        "PublicDescription": "Counts statistical profiling sample population, the count of all operations that could be sampled but may or may not be chosen for sampling."
    },
    {
        "ArchStdEvent": "SAMPLE_FEED",
        "PublicDescription": "Counts statistical profiling samples taken for sampling."
    },
    {
        "ArchStdEvent": "SAMPLE_FILTRATE",
        "PublicDescription": "Counts statistical profiling samples taken which are not removed by filtering."
    },
    {
        "ArchStdEvent": "SAMPLE_COLLISION",
        "PublicDescription": "Counts statistical profiling samples that have collided with a previous sample and so therefore not taken."
    }
]

```
