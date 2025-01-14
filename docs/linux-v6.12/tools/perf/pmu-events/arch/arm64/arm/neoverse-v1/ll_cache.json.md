---
sidebar_position: 9
---
# ll_cache.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/arm/neoverse-v1/ll_cache.json`

### コンテンツ

```json
[
    {
        "ArchStdEvent": "LL_CACHE_RD",
        "PublicDescription": "Counts read transactions that were returned from outside the core cluster. This event counts when the system register CPUECTLR.EXTLLC bit is set. This event counts read transactions returned from outside the core if those transactions are either hit in the system level cache or missed in the SLC and are returned from any other external sources."
    },
    {
        "ArchStdEvent": "LL_CACHE_MISS_RD",
        "PublicDescription": "Counts read transactions that were returned from outside the core cluster but missed in the system level cache. This event counts when the system register CPUECTLR.EXTLLC bit is set. This event counts read transactions returned from outside the core if those transactions are missed in the System level Cache. The data source of the transaction is indicated by a field in the CHI transaction returning to the CPU. This event does not count reads caused by cache maintenance operations."
    }
]

```
