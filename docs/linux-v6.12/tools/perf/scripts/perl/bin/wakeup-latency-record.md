---
sidebar_position: 10
---
# wakeup-latency-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/wakeup-latency-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e sched:sched_switch -e sched:sched_wakeup $@





```
