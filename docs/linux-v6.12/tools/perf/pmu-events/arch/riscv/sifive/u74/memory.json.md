---
sidebar_position: 3
---
# memory.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/riscv/sifive/u74/memory.json`

### コンテンツ

```json
[
  {
    "EventName": "ICACHE_RETIRED",
    "EventCode": "0x0000102",
    "BriefDescription": "Instruction cache miss"
  },
  {
    "EventName": "DCACHE_MISS_MMIO_ACCESSES",
    "EventCode": "0x0000202",
    "BriefDescription": "Data cache miss or memory-mapped I/O access"
  },
  {
    "EventName": "DCACHE_WRITEBACK",
    "EventCode": "0x0000402",
    "BriefDescription": "Data cache write-back"
  },
  {
    "EventName": "INST_TLB_MISS",
    "EventCode": "0x0000802",
    "BriefDescription": "Instruction TLB miss"
  },
  {
    "EventName": "DATA_TLB_MISS",
    "EventCode": "0x0001002",
    "BriefDescription": "Data TLB miss"
  },
  {
    "EventName": "UTLB_MISS",
    "EventCode": "0x0002002",
    "BriefDescription": "UTLB miss"
  }
]
```
