---
sidebar_position: 38
---
# task-analyzer-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/task-analyzer-report`

### コンテンツ

```txt
#!/bin/bash
# description: analyze timings of tasks
perf script -s "$PERF_EXEC_PATH"/scripts/python/task-analyzer.py -- "$@"

```
