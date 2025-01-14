---
sidebar_position: 14
---
# futex-contention-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/futex-contention-report`

### コンテンツ

```txt
#!/bin/bash
# description: futext contention measurement

perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/futex-contention.py

```
