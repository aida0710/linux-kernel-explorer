---
sidebar_position: 28
---
# sched-migration-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/sched-migration-report`

### コンテンツ

```txt
#!/bin/bash
# description: sched migration overview
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/sched-migration.py

```
