---
sidebar_position: 27
---
# sched-migration-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/sched-migration-record`

### コンテンツ

```txt
#!/bin/bash
perf record -m 16384 -e sched:sched_wakeup -e sched:sched_wakeup_new -e sched:sched_switch -e sched:sched_migrate_task $@

```
