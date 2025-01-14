---
sidebar_position: 4
---
# clock.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/ampere/emag/clock.json`

### コンテンツ

```json
[
    {
        "PublicDescription": "The number of core clock cycles",
        "ArchStdEvent": "CPU_CYCLES"
    },
    {
        "PublicDescription": "FSU clocking gated off cycle",
        "EventCode": "0x101",
        "EventName": "FSU_CLOCK_OFF_CYCLES",
        "BriefDescription": "FSU clocking gated off cycle"
    },
    {
        "PublicDescription": "Wait state cycle",
        "EventCode": "0x110",
        "EventName": "Wait_CYCLES",
        "BriefDescription": "Wait state cycle"
    }
]

```
