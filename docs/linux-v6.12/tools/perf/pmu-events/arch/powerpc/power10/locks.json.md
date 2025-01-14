---
sidebar_position: 5
---
# locks.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/powerpc/power10/locks.json`

### コンテンツ

```json
[
  {
    "EventCode": "0x1E058",
    "EventName": "PM_STCX_FAIL_FIN",
    "BriefDescription": "Conditional store instruction (STCX) failed. LARX and STCX are instructions used to acquire a lock."
  },
  {
    "EventCode": "0x2E014",
    "EventName": "PM_STCX_FIN",
    "BriefDescription": "Conditional store instruction (STCX) finished. LARX and STCX are instructions used to acquire a lock."
  },
  {
    "EventCode": "0x4E050",
    "EventName": "PM_STCX_PASS_FIN",
    "BriefDescription": "Conditional store instruction (STCX) passed. LARX and STCX are instructions used to acquire a lock."
  },
  {
    "EventCode": "0x000000C8B8",
    "EventName": "PM_STCX_SUCCESS_CMPL",
    "BriefDescription": "STCX instructions that completed successfully. Specifically, counts only when a pass status is returned from the nest."
  }
]

```
