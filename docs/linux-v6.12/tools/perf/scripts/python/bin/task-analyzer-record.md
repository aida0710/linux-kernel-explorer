---
sidebar_position: 37
---
# task-analyzer-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/task-analyzer-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e sched:sched_switch -e sched:sched_migrate_task "$@"

```
